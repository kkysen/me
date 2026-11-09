"""Convert RenderCV's Markdown output to plain text, for pasting into job application forms.

Headings lose their `#`s (sections are uppercased to stand out), bold is dropped,
and links become `text (url)`, or just the text for `mailto:` links.
Dates show the exact day where `content.yaml` has one,
since applications sometimes ask for it,
by replacing RenderCV's month-only dates in order
with the dates of the entries in the variant's generated YAML in `build/`.
"""

import re
import sys
from datetime import date
from pathlib import Path

from ruamel.yaml import YAML

ROOT = Path(__file__).parent
LINK = re.compile(r"\[([^\]]*)\]\(([^)]*)\)")
MONTH = r"[A-Z][a-z]{2} \d{4}"
DATES = re.compile(rf"^{MONTH}( – ({MONTH}|present))?$")


def format_date(value) -> str:
    if isinstance(value, date):
        return f"{value:%b} {value.day}, {value.year}"
    value = str(value)
    if value == "present":
        return value
    return date.fromisoformat(f"{value}-01").strftime("%b %Y")


def entry_dates(stem: str) -> list[str]:
    cv = YAML(typ="safe").load(ROOT / "build" / f"{stem}.yaml")["cv"]
    out = []
    for entries in cv["sections"].values():
        for entry in entries:
            if not isinstance(entry, dict):
                continue
            if entry.get("start_date"):
                start = format_date(entry["start_date"])
                end = format_date(entry.get("end_date") or "present")
                out.append(f"{start} – {end}")
            elif entry.get("date"):
                out.append(format_date(entry["date"]))
    return out


def link(m: re.Match) -> str:
    text, url = m.groups()
    return text if url.startswith("mailto:") else f"{text} ({url})"


def convert(md: str, dates: list[str]) -> str:
    lines = []
    dates = iter(dates)
    for line in md.splitlines():
        if DATES.match(line):
            line = next(dates)
        line = LINK.sub(link, line)
        line = line.replace("**", "")
        if line.startswith("## "):
            line = line[3:]
        elif line.startswith("# "):
            line = line[2:].upper()
        lines.append(line.rstrip())
    if next(dates, None) is not None:
        sys.exit("more dated entries than dates in the Markdown")
    text = "\n".join(lines)
    return re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"


def main():
    for path in map(Path, sys.argv[1:]):
        path.with_suffix(".txt").write_text(convert(path.read_text(), entry_dates(path.stem)))


if __name__ == "__main__":
    main()
