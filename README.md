![Khyber Sen's Resume](./Resume-Khyber-Sen.png)

## Updating the resume

The resume source of truth is `Khyber_Sen_CV.yaml`,
rendered with [RenderCV](https://docs.rendercv.com/).
The Python side is managed with `uv`.

The initial `Khyber_Sen_CV.yaml` template was scaffolded with `uv run rendercv new "Khyber Sen"`,
then filled in by hand.

Render it with:

```sh
uv run rendercv render Khyber_Sen_CV.yaml
```

This generates multiple rendered formats.
Textual outputs committed in the repo:
- `.md` Markdown
- `.typ` Typst
Binary outputs in `rendercv_output/`, `.gitignore`d, and hosted via GitHub Pages:
- `.html` HTML
- `.pdf` PDF
- `.png` PNGs

Add `--watch` to re-render automatically as you edit the YAML.

## Hosting

On every push to `main`, [`.github/workflows/resume.yml`](.github/workflows/resume.yml) renders `Khyber_Sen_CV.yaml`
and deploys `rendercv_output/` to GitHub Pages at <https://kkysen.github.io/me/>,
so the PDF/HTML/PNGs are always hosted from the current source, without committing generated binaries to git.
