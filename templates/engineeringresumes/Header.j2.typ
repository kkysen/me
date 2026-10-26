{% macro image() %}
#pad(left: {{ design.header.photo_space_left }}, right: {{ design.header.photo_space_right }}, image("{{ cv.photo.name }}", width: {{ design.header.photo_width }}))
{% endmacro %}

{% if cv.photo %}
{% set photo = "image(\"" + cv.photo|string + "\", width: "+ design.header.photo_width + ")" %}
#grid(
{% if design.header.photo_position == "left" %}
  columns: (auto, 1fr),
{% else %}
  columns: (1fr, auto),
{% endif %}
  column-gutter: 0cm,
  align: horizon + left,
{% if design.header.photo_position == "left" %}
  [{{ image() }}],
  [
{% else %}
  [
{% endif %}
{% endif %}
{% if cv.name %}
{# The top note, placed next to the name instead of in the top margin so they share a baseline. #}
= {{ cv.name }}#place(top + right, context {
  let note = text.with(font: "{{ design.typography.font_family.body }}", size: 0.9 * {{ design.typography.font_size.body }})
  // The name's line starts at its cap height, so drop the note by the difference in cap heights.
  let drop = measure(text("H")).height - measure(note("H")).height
  move(dy: drop, note(fill: {{ design.colors.top_note }}, [{{ cv._top_note }}]))
})
{% endif %}

{% if cv.headline %}
  #headline([{{ cv.headline }}])

{% endif %}
{# Contact details on one line, web links on the next. #}
{% set web = [] %}
{% set contact = [] %}
{% for connection in cv._connections %}
{% if connection.startswith('#link("https://') %}{% set _ = web.append(connection) %}{% else %}{% set _ = contact.append(connection) %}{% endif %}
{% endfor %}
#connections(
{% for connection in contact %}
  [{{ connection }}],
{% endfor %}
)
{% if web %}
#v(-({{ design.header.space_below_connections }} - {{ design.section_titles.space_above }}))
#v({{ design.typography.line_spacing }} * 1.7, weak: true)
#connections(
{% for connection in web %}
  [{{ connection }}],
{% endfor %}
)
{% endif %}
{% if cv.photo %}
{% if design.header.photo_position == "left" %}
  ]
)
{% else %}
  ],
  [{{ image() }}],
)
{% endif %}
{% endif %}
