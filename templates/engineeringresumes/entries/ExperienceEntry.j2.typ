{% if not design.entries.short_second_row %}
{% set first_row_lines = entry.date_and_location_column.splitlines()|length %}
{% if first_row_lines == 0 %} {% set first_row_lines = 1 %} {% endif %}
{% else %}
{% set first_row_lines = entry.main_column.splitlines()|length %}
{% endif %}
#regular-entry(
  [
{% if entry.logo is defined and entry.logo %}
    #place(left + top, dx: -0.64in, box(width: 0.58in, align(center + top, context {
      // Fit within 0.58in by 0.36in, but top-aligned with the title, unlike `fit: "contain"`.
      let size = measure(image("logos/{{ entry.logo }}"))
      let scale = calc.min(0.58in / size.width, 0.36in / size.height)
      image("logos/{{ entry.logo }}", width: size.width * scale)
    })))
{% endif %}
{% for line in entry.main_column.splitlines()[:first_row_lines] %}
    {{ line|indent(4) }}

{% endfor %}
  ],
  [
{% for line in entry.date_and_location_column.splitlines() %}
    {{ line|indent(4) }}

{% endfor %}
  ],
{% if not design.entries.short_second_row %}
  main-column-second-row: [
{% for line in entry.main_column.splitlines()[first_row_lines:] %}
    {{ line|indent(4) }}

{% endfor %}
  ],
{% endif %}
)
