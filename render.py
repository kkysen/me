"""Run the `rendercv` CLI, keeping nested highlights nested in Typst.

RenderCV turns a highlight's " - " into an indented sub-bullet line,
but its Markdown-to-Typst conversion strips each line's leading spaces,
so Typst renders sub-bullets as top-level bullets.
This keeps each line's indentation around the converted text.
"""

import re
import sys

from rendercv.cli.entry_point import entry_point
from rendercv.renderer.templater import model_processor

markdown_to_typst = model_processor.markdown_to_typst


def markdown_to_typst_keeping_indent(markdown: str) -> str:
    if "!!!" in markdown:
        return markdown_to_typst(markdown)
    lines = []
    for line in markdown.split("\n"):
        indent = re.match(r" *", line).group()
        lines.append(indent + markdown_to_typst(line[len(indent) :]))
    return "\n".join(lines)


model_processor.markdown_to_typst = markdown_to_typst_keeping_indent

if __name__ == "__main__":
    sys.exit(entry_point())
