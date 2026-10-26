{% if not design.entries.short_second_row %}
{% set first_row_lines = entry.date_and_location_column.splitlines()|length %}
{% if first_row_lines == 0 %} {% set first_row_lines = 1 %} {% endif %}
{% else %}
{% set first_row_lines = entry.main_column.splitlines()|length %}
{% endif %}
{# Stack education entries without the usual gap between entries. #}
#context if query(selector(<education-entry>).before(here())).len() > 0 {
  v(-{{ design.sections.space_between_regular_entries }})
}
#metadata(none) <education-entry>
#education-entry(
  [
{% for line in entry.main_column.splitlines()[:first_row_lines] %}
{# Push the location (e.g. a gap year) right, next to the dates. #}
{% if entry.location and line.endswith(" " ~ entry.location) %}
{% set line = line[:-(entry.location|length)] ~ "#h(1fr) " ~ entry.location %}
{% endif %}
    {{ line|indent(4) }}

{% endfor %}
  ],
  [
{% for line in entry.date_and_location_column.splitlines() %}
    {{ line|indent(4) }}

{% endfor %}
  ],
{% if design.templates.education_entry.degree_column %}
  degree-column: [
    {{ entry.degree_column|indent(4) }}
  ],
{% endif %}
{% if not design.entries.short_second_row %}
  main-column-second-row: [
{% for line in entry.main_column.splitlines()[first_row_lines:] %}
    {{ line|indent(4) }}

{% endfor %}
  ],
{% endif %}
)
