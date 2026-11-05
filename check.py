"""Fail if a resume that must fit a page limit has grown past it."""

import sys
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).parent

# PDF -> most pages it may have
LIMITS = {
    "private/Resume-Khyber-Sen-MTA-Software.pdf": 2,
}


def main():
    over = False
    for pdf, limit in LIMITS.items():
        pages = len(PdfReader(ROOT / pdf).pages)
        if pages > limit:
            print(f"{Path(pdf).stem} is {pages} pages, but must be at most {limit}", file=sys.stderr)
            over = True
    if over:
        sys.exit(1)


if __name__ == "__main__":
    main()
