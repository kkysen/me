# Khyber's Resume

[All versions](https://kkysen.github.io/me/) | [View as HTML](https://kkysen.github.io/me/Resume-Khyber-Sen.html) | [Download as PDF](https://kkysen.github.io/me/Resume-Khyber-Sen.pdf)

![Khyber Sen's Resume, page 1](https://kkysen.github.io/me/Resume-Khyber-Sen_1.png)
![Khyber Sen's Resume, page 2](https://kkysen.github.io/me/Resume-Khyber-Sen_2.png)
![Khyber Sen's Resume, page 3](https://kkysen.github.io/me/Resume-Khyber-Sen_3.png)

## Versions

There are five public versions, all generated from one source:
- `CV-Khyber-Sen`: the complete CV, with everything
- `Resume-Khyber-Sen`: the general resume
- `Resume-Khyber-Sen-Software`: tailored for software jobs
- `Resume-Khyber-Sen-Transit`: tailored for transit jobs
- `Resume-Khyber-Sen-Transit-Software`: tailored for software jobs in transit

Private versions, if any, render into `private/` (`.gitignore`d) and are never committed or deployed.

## Updating the Resume

The source of truth is `content.yaml`,
rendered with [RenderCV](https://docs.rendercv.com/).
The Python side is managed with `uv`.

The initial template was scaffolded with `uv run rendercv new "Khyber Sen"`,
then filled in by hand.

`build.py` generates one RenderCV YAML per version into `build/` (`.gitignore`d).
Everything in `content.yaml` goes into every version by default.
To limit an entry to certain versions, give it a `versions:` list
(any of `cv`, `general`, `software`, `transit`, `transit-software`):

```yaml
      - company: Dietrich Lab, Columbia University
        versions: [cv]
```

Prefix a version with `-` to exclude it instead,
e.g. `versions: [-software]` means every version except `software`.
A version can also be based on others, getting everything any of its bases does,
minus anything excluded from it or from any of its bases.

To limit a single highlight, write it as a `text`/`versions` mapping instead of a plain string:

```yaml
          - text: Team captain senior year.
            versions: [cv, general]
```

Render all versions with:

```sh
just render
```

This generates multiple rendered formats per version.
Textual outputs committed in the repo:
- `.md` Markdown
- `.typ` Typst
Binary outputs in `rendercv_output/`, `.gitignore`d, and hosted via GitHub Pages:
- `.html` HTML
- `.pdf` PDF
- `.png` PNGs

For auto re-render as you edit, run `just watch <version>`, e.g. `just watch Resume-Khyber-Sen-Transit`.
This watches the generated YAML, so re-run `uv run python build.py` after editing `content.yaml`.

## Hosting

On every push to `main`, [`.github/workflows/resume.yml`](.github/workflows/resume.yml) renders every version
and deploys `rendercv_output/` to GitHub Pages at <https://kkysen.github.io/me/>,
with `index.html` linking to each version,
so the PDF/HTML/PNGs are always hosted from the current source, without committing generated binaries to git.
