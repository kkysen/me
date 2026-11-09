"""Write a plain text version of each resume variant, for pasting into job application forms.

Application forms often parse the PDF badly, so fields have to be filled in by hand.
This reads each variant's generated YAML in `build/`
and writes it as labeled fields like `Company:` and `Start Date:`, one entry per block.
Bold is dropped, and links become `text (url)`,
except a company, school, or project link, which gets its own field.
Dates show the exact day where `content.yaml` has one,
since applications sometimes ask for it.
"""

import re
import sys
from datetime import date
from pathlib import Path

from ruamel.yaml import YAML

ROOT = Path(__file__).parent
LINK = re.compile(r"\[([^\]]*)\]\(([^)]*)\)")
NETWORK_URLS = {
    "GitHub": "https://github.com/{}",
    "LinkedIn": "https://linkedin.com/in/{}",
}
# Labels for `custom_connections`, by their icon.
CONNECTION_LABELS = {
    "bluesky": "Bluesky",
}
SECTION_TITLES = {
    "recent_projects": "Recent Projects",
}


def inline(text) -> str:
    """Strip Markdown from inline text."""
    text = LINK.sub(lambda m: f"{m[1]} ({m[2]})", str(text or ""))
    return text.replace("**", "").replace(" -- ", " – ")


def split_link(text) -> tuple[str, str]:
    """Split a name like `[Name](url) (extra)` into `Name (extra)` and the URL."""
    text = str(text or "")
    m = LINK.search(text)
    if not m:
        return inline(text), ""
    return inline(text[: m.start()] + m[1] + text[m.end() :]), m[2]


def format_date(value) -> str:
    if isinstance(value, date):
        return f"{value:%m/%d/%Y}"
    value = str(value or "")
    if value in ("", "present"):
        return value
    # Only the month is known.
    return date.fromisoformat(f"{value}-01").strftime("%m/%Y")


def highlights(entry) -> list[str]:
    lines = []
    if entry.get("summary"):
        lines.append(inline(entry["summary"]))
    for h in entry.get("highlights") or []:
        # `build.py` joins sub-bullets with " - " for RenderCV.
        first, *subs = h.split(" - ")
        lines.append(f"- {inline(first)}")
        lines.extend(f"  - {inline(sub)}" for sub in subs)
    return lines


def fields(pairs) -> list[str]:
    return [f"{label}: {value}".rstrip() for label, value in pairs if value is not None]


def dates(entry) -> list[tuple[str, str]]:
    if entry.get("date"):
        return [("Date", format_date(entry["date"]))]
    if not entry.get("start_date"):
        return []
    return [
        ("Start Date", format_date(entry["start_date"])),
        ("End Date", format_date(entry.get("end_date") or "present")),
    ]


def summary_block(entry) -> list[str]:
    lines = highlights(entry)
    if not lines:
        return []
    if len(lines) == 1 and not lines[0].startswith("- "):
        return [f"Summary: {lines[0]}"]
    return ["Summary:", *lines]


def education(entry) -> list[str]:
    school, url = split_link(entry["institution"])
    out = fields(
        [
            ("School", school),
            ("School Website", url or None),
            ("Degree", inline(entry.get("full_degree") or entry.get("degree"))),
            ("Field of Study", inline(entry.get("field_of_study") or entry.get("area"))),
            *dates(entry),
            ("GPA", entry.get("gpa")),
            ("Major GPA", entry.get("major_gpa")),
        ]
    )
    if entry.get("gpa") and entry.get("summary"):
        # The summary repeats the GPAs for the resumes, where they have no field of their own.
        parts = [p for p in entry["summary"].split(", ") if "GPA" not in p]
        entry = {**entry, "summary": ", ".join(parts)}
    if entry.get("location"):
        # A school's location column holds a note like a gap year, not a place.
        note = inline(entry["location"]).strip("()")
        entry = {**entry, "summary": ", ".join(filter(None, [entry.get("summary"), note]))}
    return out + summary_block(entry)


def experience(entry) -> list[str]:
    company, url = split_link(entry["company"])
    out = fields(
        [
            ("Company", company),
            ("Company Website", url or None),
            ("Title", inline(entry.get("position"))),
            ("Location", inline(entry["location"]) if entry.get("location") else None),
            *dates(entry),
        ]
    )
    return out + summary_block(entry)


def split_languages(name: str) -> tuple[str, str]:
    """Split a project name like `Name (Python, Rust)` into the name and its languages."""
    if not name.endswith(")"):
        return name, ""
    # Find the "(" matching the last ")", since languages may nest, like `WebAssembly (C++17)`.
    depth = 0
    for i in range(len(name) - 1, -1, -1):
        depth += {")": 1, "(": -1}.get(name[i], 0)
        if depth == 0:
            return name[:i].rstrip(), name[i + 1 : -1]
    return name, ""


# Anything else in a project's parentheses is a technology, like Android or d3.
LANGUAGES = {"C", "C++", "C++17", "Java", "JS", "Kotlin", "Python", "Rust", "TypeScript", "Typst"}


def split_technologies(languages: str) -> tuple[list[str], list[str]]:
    """Split a project's parenthesized list into languages and other technologies."""
    langs = []
    techs = []
    # Split on commas outside parentheses, so `WebAssembly (C++17)` stays whole.
    for item in re.split(r",\s*(?![^()]*\))", languages) if languages else []:
        if m := re.fullmatch(r"(.*?) \((.*)\)", item):
            # Like `WebAssembly (C++17)`: a technology used through a language.
            techs.append(m[1])
            langs.append(m[2])
        elif item in LANGUAGES:
            langs.append(item)
        else:
            techs.append(item)
    return langs, techs


def project(entry) -> list[str]:
    name, url = split_link(entry["name"])
    name, parenthesized = split_languages(name)
    langs, techs = split_technologies(parenthesized)
    out = fields(
        [
            ("Project", name),
            ("URL", url or None),
            ("Languages", ", ".join(langs) or None),
            ("Technologies", ", ".join(techs) or None),
            *dates(entry),
        ]
    )
    return out + summary_block(entry)


def entry_block(entry) -> list[str]:
    if isinstance(entry, str):
        return [inline(entry)]
    if "institution" in entry:
        return education(entry)
    if "company" in entry:
        return experience(entry)
    if "name" in entry:
        return project(entry)
    if "label" in entry:
        return [f"{inline(entry['label'])}: {inline(entry['details'])}"]
    if "bullet" in entry:
        return [f"- {inline(entry['bullet'])}"]
    sys.exit(f"unknown entry type: {entry!r}")


def convert(cv) -> str:
    header = fields(
        [
            ("Name", cv.get("name")),
            ("Email", cv.get("email")),
            ("Phone Number", str(cv["phone"]).replace("-", " ") if cv.get("phone") else None),
            ("Location", cv.get("location")),
            ("Website", cv.get("website")),
        ]
    )
    for social in cv.get("social_networks") or []:
        url = NETWORK_URLS[social["network"]].format(social["username"])
        header.append(f"{social['network']}: {url}")
    for connection in cv.get("custom_connections") or []:
        label = CONNECTION_LABELS[connection["fontawesome_icon"]]
        header.append(f"{label}: {connection['url']}")
    blocks = ["\n".join(header)]
    for name, entries in cv["sections"].items():
        known = name.islower()
        title = SECTION_TITLES.get(name, name.replace("_", " ").title()) if known else "Summary"
        blocks.append(title.upper())
        if not known:
            # `build.py` titles the summary with the headline.
            blocks.append("\n".join([f"Headline: {name}", *(f"Summary: {inline(e)}" for e in entries)]))
            continue
        if all(isinstance(e, str) for e in entries) or all("label" in e or "bullet" in e for e in entries):
            # Short entries read better as one block than spaced out.
            blocks.append("\n".join(line for e in entries for line in entry_block(e)))
            continue
        blocks.extend("\n".join(entry_block(e)) for e in entries)
    return "\n\n".join(blocks) + "\n"


def main():
    yaml = YAML(typ="safe")
    for path in map(Path, sys.argv[1:]):
        cv = yaml.load(ROOT / "build" / f"{path.stem}.yaml")["cv"]
        path.with_suffix(".txt").write_text(convert(cv))


if __name__ == "__main__":
    main()
