"""Generate one RenderCV YAML per resume variant from `content.yaml`.

Any entry (a dict in a section's list) or highlight may be limited to
certain variants. An entry takes a `versions:` list; a highlight is
written as `{text: ..., versions: [...]}` instead of a plain string.
Anything without `versions` is included in every variant.
"""

import copy
import sys
from pathlib import Path

from ruamel.yaml import YAML

ROOT = Path(__file__).parent
BUILD = ROOT / "build"

# name -> (file stem, document word)
VARIANTS = {
    "cv": ("CV-Khyber-Sen", "CV"),
    "general": ("Resume-Khyber-Sen", "Resume"),
    "software": ("Resume-Khyber-Sen-Software", "Resume"),
    "transit": ("Resume-Khyber-Sen-Transit", "Resume"),
}


def included(item, variant: str) -> bool:
    versions = item.get("versions") if isinstance(item, dict) else None
    if versions is None:
        return True
    unknown = set(versions) - VARIANTS.keys()
    if unknown:
        sys.exit(f"unknown versions {sorted(unknown)} in {item!r}")
    return variant in versions


def filter_highlights(highlights, variant: str):
    out = []
    for h in highlights:
        if not included(h, variant):
            continue
        out.append(h["text"] if isinstance(h, dict) else h)
    return out


def filter_entries(entries, variant: str):
    out = []
    for entry in entries:
        if not included(entry, variant):
            continue
        if isinstance(entry, dict):
            entry.pop("versions", None)
            if entry.get("highlights"):
                entry["highlights"] = filter_highlights(entry["highlights"], variant)
        out.append(entry)
    return out


def build(content, variant: str, stem: str, word: str):
    data = copy.deepcopy(content)
    sections = data["cv"]["sections"]
    for name in list(sections):
        sections[name] = filter_entries(sections[name], variant)
        if not sections[name]:
            del sections[name]
    data["settings"]["pdf_title"] = f"NAME - {word}"
    paths = data["settings"]["render_command"]
    # Paths resolve relative to the generated YAML in `build/`.
    paths["output_folder"] = "../rendercv_output"
    paths["typst_path"] = f"../{stem}.typ"
    paths["markdown_path"] = f"../{stem}.md"
    for ext in ("pdf", "html", "png"):
        paths[f"{ext}_path"] = f"OUTPUT_FOLDER/{stem}.{ext}"
    return data


def main():
    yaml = YAML()
    yaml.width = 4096
    content = yaml.load(ROOT / "content.yaml")
    BUILD.mkdir(exist_ok=True)
    for variant, (stem, word) in VARIANTS.items():
        yaml.dump(build(content, variant, stem, word), BUILD / f"{stem}.yaml")
        print(BUILD / f"{stem}.yaml")


if __name__ == "__main__":
    main()
