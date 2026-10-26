"""Run the `rendercv` CLI, keeping nested highlights nested in Typst.

RenderCV turns a highlight's " - " into an indented sub-bullet line,
but its Markdown-to-Typst conversion strips each line's leading spaces,
so Typst renders sub-bullets as top-level bullets.
This keeps each line's indentation around the converted text.

RenderCV also hardcodes header connection links as uncolored and not underlined.
This styles web links like every other link, so they read as links on paper,
but leaves email and phone links plain.

RenderCV's HTML is its Markdown output styled as a GitHub README.
This instead renders `templates/html/Full.html` from the model, like the Typst output,
so the HTML can look like the PDF, logos and all.
"""

import re
import sys

import markdown
from rendercv.cli.entry_point import entry_point
from rendercv.renderer import html
from rendercv.renderer.templater import model_processor, templater

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

compute_connections = model_processor.compute_connections


def compute_connections_styled_as_links(rendercv_model, file_type):
    connections = compute_connections(rendercv_model, file_type)
    if file_type != "typst":
        return connections
    return [
        c.replace(", if-underline: false, if-color: false", "")
        if c.startswith('#link("https://')
        else c
        for c in connections
    ]


model_processor.compute_connections = compute_connections_styled_as_links


def markdown_to_html(text: str) -> str:
    lines = [line.replace("    ", "") for line in text.splitlines() if line != "!!! summary"]
    # Python-Markdown nests lists by 4 spaces, not RenderCV's 2.
    lines = [re.sub(r"^  - ", "    - ", line) for line in lines]
    # Typst renders "--" as an en dash, so do the same.
    return markdown.markdown("\n\n".join(lines).replace(" -- ", " – "))


def markdown_inline_to_html(text: str) -> str:
    return markdown_to_html(text).removeprefix("<p>").removesuffix("</p>")


def render_html_from_model(rendercv_model, _markdown: str) -> str:
    env = templater.get_jinja2_environment(rendercv_model._input_file_path)
    env.filters["markdown"] = markdown_to_html
    env.filters["markdown_inline"] = markdown_inline_to_html
    rendercv_model = model_processor.process_model(rendercv_model, "markdown")
    return templater.render_single_template("html", "Full.html", rendercv_model)


html.render_html = render_html_from_model

if __name__ == "__main__":
    sys.exit(entry_point())
