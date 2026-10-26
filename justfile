variants := "CV-Khyber-Sen Resume-Khyber-Sen Resume-Khyber-Sen-Software Resume-Khyber-Sen-Transit Resume-Khyber-Sen-Transit-Software"
private_variants := "Resume-Khyber-Sen-MTA Resume-Khyber-Sen-MTA-Software"

render:
    uv run python build.py
    for v in {{variants}}; do uv run python render.py render build/$v.yaml; done
    for v in {{private_variants}}; do uv run python render.py render build/$v.yaml; done
    sed -i "s/'s CV/'s Resume/" Resume-Khyber-Sen*.md rendercv_output/Resume-Khyber-Sen*.html private/*.md private/*.html
    cp index.html rendercv_output/index.html

# Re-render one variant on every change to its generated YAML.
watch variant="Resume-Khyber-Sen":
    uv run python build.py
    uv run python render.py render build/{{variant}}.yaml --watch
