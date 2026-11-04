{% if not design.entries.short_second_row %}
{% set first_row_lines = entry.date_and_location_column.splitlines()|length %}
{% if first_row_lines == 0 %} {% set first_row_lines = 1 %} {% endif %}
{% else %}
{% set first_row_lines = entry.main_column.splitlines()|length %}
{% endif %}
// Keep each entry on one page, unless it's marked `split` because moving it whole would waste too much space.
#block(breakable: {{ (entry.split is defined and entry.split == "true")|lower }}, regular-entry(
  [
{% if entry.logo is defined and entry.logo %}
    #place(left + top, dx: -({{ design.page.left_margin }} + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/{{ entry.logo }}"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/{{ entry.logo }}", width: size.width * scale))
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
{% if entry.logo is defined and entry.logo and not entry.main_column.splitlines()[first_row_lines:]|select|list %}
    // The logo is taller than the title line, so without highlights below it, it would touch the next entry's logo.
    #v(0.1in)
{% endif %}
  ],
{% endif %}
))
