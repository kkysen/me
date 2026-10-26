"""Generate one RenderCV YAML per resume variant from `content.yaml`.

Any entry (a dict in a section's list or in the header's connections)
or highlight may be limited to certain variants. An entry takes a `versions:` list; a highlight is
written as `{text: ..., versions: [...]}` instead of a plain string.
So is a text entry, such as a line in the interests section.
Such a highlight may also have its own `highlights:` as sub-bullets.
RenderCV makes sub-bullets by splitting on " - ",
so a highlight's own text can't contain one.
Any other field of an entry, or of the header, may instead be a list of `{text: ..., versions: [...]}`
alternatives, and takes the first one included in the variant.
Anything without `versions` is included in every variant.
A `-name` in `versions` excludes that variant instead;
a list of only exclusions includes every other variant.

A variant may have bases: it gets everything any of its bases gets,
minus anything excluded from it or from any of its bases (recursively).
Private variants render into `private/` (`.gitignore`d) and aren't deployed.
"""

import copy
import shutil
import sys
from pathlib import Path

from ruamel.yaml import YAML

ROOT = Path(__file__).parent
BUILD = ROOT / "build"

# name -> (file stem, document word, base variants, private)
VARIANTS = {
    "cv": ("CV-Khyber-Sen", "CV", (), False),
    "general": ("Resume-Khyber-Sen", "Resume", (), False),
    "software": ("Resume-Khyber-Sen-Software", "Resume", (), False),
    "transit": ("Resume-Khyber-Sen-Transit", "Resume", (), False),
    "transit-software": ("Resume-Khyber-Sen-Transit-Software", "Resume", ("transit", "software"), False),
    "mta": ("Resume-Khyber-Sen-MTA", "Resume", ("transit",), True),
    "mta-software": ("Resume-Khyber-Sen-MTA-Software", "Resume", ("mta", "software"), True),
}


def ancestors(variant: str) -> set[str]:
    out = {variant}
    for base in VARIANTS[variant][2]:
        out |= ancestors(base)
    return out


def included(item, variant: str) -> bool:
    versions = item.get("versions") if isinstance(item, dict) else None
    if versions is None:
        return True
    excluded = {v[1:] for v in versions if v.startswith("-")}
    wanted = {v for v in versions if not v.startswith("-")}
    unknown = (excluded | wanted) - VARIANTS.keys()
    if unknown:
        sys.exit(f"unknown versions {sorted(unknown)} in {item!r}")
    if excluded & ancestors(variant):
        return False
    if not wanted:
        return True
    return bool(wanted & ancestors(variant))


def filter_highlights(highlights, variant: str):
    out = []
    for h in highlights:
        if not included(h, variant):
            continue
        text = h["text"] if isinstance(h, dict) else h
        if " - " in text:
            sys.exit(f"' - ' would split this highlight into sub-bullets: {text!r}")
        if not isinstance(h, dict):
            out.append(h)
            continue
        # RenderCV splits a highlight into sub-bullets on " - ".
        subs = filter_highlights(h.get("highlights") or [], variant)
        out.append(" - ".join([text, *subs]))
    return out


def is_alternatives(value) -> bool:
    return (
        isinstance(value, list)
        and bool(value)
        and all(isinstance(v, dict) and "text" in v for v in value)
    )


def pick_alternatives(fields: dict, variant: str):
    for key, value in fields.items():
        if key != "highlights" and is_alternatives(value):
            fields[key] = next((v["text"] for v in value if included(v, variant)), None)


def filter_entries(entries, variant: str):
    out = []
    for entry in entries:
        if not included(entry, variant):
            continue
        if isinstance(entry, dict) and entry.keys() <= {"text", "versions"}:
            # A versioned text entry, which RenderCV takes as a plain string.
            entry = entry["text"]
        if isinstance(entry, dict):
            entry.pop("versions", None)
            pick_alternatives(entry, variant)
            if entry.get("highlights"):
                entry["highlights"] = filter_highlights(entry["highlights"], variant)
        out.append(entry)
    return out


def build(content, variant: str, stem: str, word: str, private: bool):
    data = copy.deepcopy(content)
    pick_alternatives(data["cv"], variant)
    for name in ("social_networks", "custom_connections"):
        if data["cv"].get(name):
            data["cv"][name] = filter_entries(data["cv"][name], variant) or None
    sections = data["cv"]["sections"]
    for name in list(sections):
        sections[name] = filter_entries(sections[name], variant)
        if not sections[name]:
            del sections[name]
    data["settings"]["pdf_title"] = f"NAME - {word}"
    paths = data["settings"]["render_command"]
    # Paths resolve relative to the generated YAML in `build/`.
    text_dir = "../private" if private else ".."
    paths["output_folder"] = "../private" if private else "../rendercv_output"
    paths["typst_path"] = f"{text_dir}/{stem}.typ"
    paths["markdown_path"] = f"{text_dir}/{stem}.md"
    for ext in ("pdf", "html", "png"):
        paths[f"{ext}_path"] = f"OUTPUT_FOLDER/{stem}.{ext}"
    return data


def main():
    yaml = YAML()
    yaml.width = 4096
    content = yaml.load(ROOT / "content.yaml")
    BUILD.mkdir(exist_ok=True)
    # RenderCV looks for template overrides next to the input YAML.
    shutil.copytree(ROOT / "templates", BUILD, dirs_exist_ok=True)
    # Typst resolves images relative to the `.typ` file, and private ones are in `private/`.
    (ROOT / "private").mkdir(exist_ok=True)
    shutil.copytree(ROOT / "logos", ROOT / "private" / "logos", dirs_exist_ok=True)
    for variant, (stem, word, _, private) in VARIANTS.items():
        yaml.dump(build(content, variant, stem, word, private), BUILD / f"{stem}.yaml")
        print(BUILD / f"{stem}.yaml")


if __name__ == "__main__":
    main()
