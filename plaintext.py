"""Convert RenderCV's Markdown output to plain text, for pasting into job application forms.

Headings lose their `#`s (sections are uppercased to stand out), bold is dropped,
and links become `text (url)`, or just the text for `mailto:` links.
"""

import re
import sys
from pathlib import Path

LINK = re.compile(r"\[([^\]]*)\]\(([^)]*)\)")


def link(m: re.Match) -> str:
    text, url = m.groups()
    return text if url.startswith("mailto:") else f"{text} ({url})"


def convert(md: str) -> str:
    lines = []
    for line in md.splitlines():
        line = LINK.sub(link, line)
        line = line.replace("**", "")
        if line.startswith("## "):
            line = line[3:]
        elif line.startswith("# "):
            line = line[2:].upper()
        lines.append(line.rstrip())
    text = "\n".join(lines)
    return re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"


def main():
    for path in map(Path, sys.argv[1:]):
        path.with_suffix(".txt").write_text(convert(path.read_text()))


if __name__ == "__main__":
    main()
