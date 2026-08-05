![Khyber Sen's Resume](./Resume-Khyber-Sen.png)

## Updating the resume

The resume source of truth is `Resume-Khyber-Sen.yaml`,
rendered with [RenderCV](https://docs.rendercv.com/).
The Python side is managed with `uv`.

The initial template was scaffolded with `uv run rendercv new "Khyber Sen"`,
then filled in by hand and renamed to `Resume-Khyber-Sen.yaml` to match the old `Resume-Khyber-Sen.pdf`/`.png`.

Render it with:

```sh
just render
```

This generates multiple rendered formats.
Textual outputs committed in the repo:
- `.md` Markdown
- `.typ` Typst
Binary outputs in `rendercv_output/`, `.gitignore`d, and hosted via GitHub Pages:
- `.html` HTML
- `.pdf` PDF
- `.png` PNGs

For auto re-render as you edit the YAML, run
`uv run rendercv render Resume-Khyber-Sen.yaml --watch` directly instead of `just render`.

## Hosting

On every push to `main`, [`.github/workflows/resume.yml`](.github/workflows/resume.yml) renders `Resume-Khyber-Sen.yaml`
and deploys `rendercv_output/` to GitHub Pages at <https://kkysen.github.io/me/>,
so the PDF/HTML/PNGs are always hosted from the current source, without committing generated binaries to git.
