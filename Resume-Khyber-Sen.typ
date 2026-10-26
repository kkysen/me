// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Khyber Sen",
  title: "Khyber Sen - Resume",
  footer: context { [#emph[Khyber Sen -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Oct 2026] ],
  locale-catalog-language: "en",
  text-direction: ltr,
  page-size: "us-letter",
  page-top-margin: 0.5in,
  page-bottom-margin: 0.5in,
  page-left-margin: 0.5in,
  page-right-margin: 0.5in,
  page-show-footer: false,
  page-show-top-note: false,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "left",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "XCharter",
  typography-font-family-name: "XCharter",
  typography-font-family-headline: "XCharter",
  typography-font-family-connections: "XCharter",
  typography-font-family-section-titles: "XCharter",
  typography-font-size-body: 10pt,
  typography-font-size-name: 25pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.2em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: false,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: true,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.4cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.4cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: false,
  header-connections-display-urls-instead-of-usernames: true,
  header-connections-separator: "|",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.15cm,
  sections-space-between-regular-entries: 0.25cm,
  entries-date-and-location-width: 3.6cm,
  entries-side-space: 0cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: true,
  entries-short-second-row: false,
  entries-degree-width: 1cm,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.08cm,
  entries-highlights-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-nested-bullet:  "◦" ,
  entries-highlights-space-left: 0cm,
  entries-highlights-space-above: 0.08cm,
  entries-highlights-space-between-items: 0.08cm,
  entries-highlights-space-between-bullet-and-text: 0.3em,
  date: datetime(
    year: 2026,
    month: 10,
    day: 26,
  ),
)


= Khyber Sen#place(top + right, context {
  let note = text.with(font: "XCharter", size: 0.9 * 10pt)
  // The name's line starts at its cap height, so drop the note by the difference in cap heights.
  let drop = measure(text("H")).height - measure(note("H")).height
  move(dy: drop, note(fill: rgb(128, 128, 128), [#emph[Last updated in Oct 2026]]))
})

#connections(
  [NYC],
  [#link("mailto:kkysen@gmail.com", icon: false, if-underline: false, if-color: false)[kkysen\@gmail.com]],
  [#link("tel:+1-917-648-8677", icon: false, if-underline: false, if-color: false)[(917) 648-8677]],
)
#v(-(0.4cm - 0.5cm))
#v(0.6em * 1.7, weak: true)
#connections(
  [#link("https://github.com/kkysen", icon: false)[github.com\/kkysen]],
  [#link("https://linkedin.com/in/khyber-sen", icon: false)[linkedin.com\/in\/khyber-sen]],
)


== Systems Software Engineer

Civic-minded systems engineer drawn to complex systems at every scale and across domains, from pure software such as compilers and operating systems to real-world housing markets, the human endocrine system, and transit networks. I find where these systems interact and break down, and how they can be optimized for the benefit of all.

== Education

#context if query(selector(<education-entry>).before(here())).len() > 0 {
  v(-0.25cm)
}
#metadata(none) <education-entry>
#education-entry(
  [
    #strong[Columbia University], BA in CS: 3.79 GPA, 3.98 GPA in major, Rabi Scholar #h(1fr) (gap year 2020–21)

  ],
  [
    Sep 2018 – Feb 2023

  ],
  main-column-second-row: [
  ],
)

#context if query(selector(<education-entry>).before(here())).len() > 0 {
  v(-0.25cm)
}
#metadata(none) <education-entry>
#education-entry(
  [
    #strong[Stuyvesant High School], 97.5 GPA unweighted, Scholar Athlete award

  ],
  [
    Sep 2014 – Jun 2018

  ],
  main-column-second-row: [
  ],
)

== Experience

#regular-entry(
  [
    #place(left + top, dx: -(0.5in + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/eta.svg"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/eta.svg", width: size.width * scale))
    })))
    #strong[Director of Transit Operations and Planning], #link("https://www.etany.org/")[Effective Transit Alliance] (ETA) -- NYC

  ],
  [
    Nov 2023 – present

  ],
  main-column-second-row: [
    - Advocating for better transit in the NY metro area through technical analysis drawing from international best practices. Meeting with journalists, MTA staff, and elected officials. Researching and developing expertise in the latest advances in rolling stock, electrification, tunneling and station construction, service optimization, signaling, and automation.

    - Attended transit conferences across the world to learn best practices from peer cities:

      - InnoTrans 2026 in Berlin

      - 10 TransportationCamps in NYC, Philadelphia, Boston, and DC

    - IBX (Project Manager)

      - #link("https://www.etany.org/ibx-all-faiths-tunnel")[IBX: 515 Feet from Greatness]: advocated for an All Faiths Tunnel, prompting the MTA to abandon street-running and commit to a tunnel, increasing ridership by 35\% and speed by 31\%, and saving riders a combined 3 years per day.

    - 125 St Subway (Project Manager)

      - #link("https://www.etany.org/reports/digging-out-deep-hole-sas-west")[Digging Out of a Very Deep Hole: Saving Billions on 125th Street]: how to build shallower stations that save riders up to 10 min per trip and the MTA billions by using the latest in subway construction techniques.

    - Better Subway Service

      - #link("https://www.etany.org/statements/impeding-progress-costing-riders-opto")[Impeding Progress, Costing Riders]: helped convince Governor Hochul to veto a 2025 bill that would have banned one-person train operation, preventing New York's transit system from being locked out of future modernization.

    - Penn Station Through-Running

      - #link("https://www.etany.org/penn-station-can-handle-the-load")[Penn Station Can Handle the Load]: rebuilt the passenger crowding model to show Penn Station can support 48 tph.

  ],
)

#regular-entry(
  [
    #place(left + top, dx: -(0.5in + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/jta.png"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/jta.png", width: size.width * scale))
    })))
    #strong[Board Member], #link("https://jointtransit.org/")[Joint Transit Association] (JTA) -- NYC

  ],
  [
    May 2026 – present

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #place(left + top, dx: -(0.5in + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/queenslink.png"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/queenslink.png", width: size.width * scale))
    })))
    #strong[Communications Associate], #link("https://thequeenslink.org/")[QueensLink] -- NYC

  ],
  [
    Mar 2024 – present

  ],
  main-column-second-row: [
    - Advocating for QueensLink, a proposal to convert the abandoned Rockaway Beach Branch rail line through central Queens into a dual-use subway extension and linear park.

  ],
)

#regular-entry(
  [
    #place(left + top, dx: -(0.5in + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/immunant.png"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/immunant.png", width: size.width * scale))
    })))
    #strong[Software Engineer], #link("https://immunant.com/")[Immunant] -- Remote

  ],
  [
    May 2022 – Apr 2026

  ],
  main-column-second-row: [
    - #link("https://github.com/immunant/c2rust")[c2rust]: Core developer of c2rust, a C to Rust transpiler, as part of the DARPA ALLSTAR and TRACTOR programs, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

      - Wrote a rustc instrumentation plugin to dynamically trace pointer usage and provenance throughout program runs, building a pointer derivation graph to complement a static analysis modeling pointer permissions.

    - #link("https://github.com/memorysafety/rav1d")[rav1d]: Ported the bulk of the AV1 decoder dav1d from C to Rust, translating complex C idioms while preserving performance, and extensively optimizing the result, including instrumenting and modifying rustc where it differed from C. The result is just 5\% slower than C's dav1d, 3.8\% of which comes from the initial unsafe transpile.

    - #link("https://github.com/immunant/IA2-Phase2")[IA2]: Helped develop IA2, a tool for sandboxing intraprocess compartments from each other's memory using x86\_64's Memory Protection Keys and Arm's Memory Tagging Extension (MTE). Tested IA2 on dav1d, fixing bugs and adding features to handle a program as complex as dav1d, and added callgate data verification so data crossing the boundary between isolated compartments could be further verified.

  ],
)

#regular-entry(
  [
    #place(left + top, dx: -(0.5in + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/mediatek.png"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/mediatek.png", width: size.width * scale))
    })))
    #strong[Compiler Intern], MediaTek -- Woburn, MA

  ],
  [
    May 2020 – Dec 2021

  ],
  main-column-second-row: [
    - If Conversion: Replaced monomorphic branch unswitching with polymorphic if conversion for significant code size savings with minimal performance impact.

    - Little Doctor: Built the Little Doctor, a framework for testing the compiler's debug info's quality using gdb's Python API, which discovered hundreds of bugs in just 2 months.

    - Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.

  ],
)

#regular-entry(
  [
    #place(left + top, dx: -(0.5in + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/columbia.png"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/columbia.png", width: size.width * scale))
    })))
    #strong[Rabi Scholar Researcher], Columbia University (#link("https://github.com/kkysen/SmartNeuralFuzzer")[SmartNeuralFuzzer])

  ],
  [
    Jan 2019 – Aug 2019

  ],
  main-column-second-row: [
    - Built an LLVM pass recording every branch decision of multi-threaded, multi-process programs, enabling record-replay debugging of control flow and feeding a neural net that guides fuzzing, taint analysis, and profile-guided optimizations, uncovering hidden data dependencies and elusive bugs.

  ],
)

#regular-entry(
  [
    #place(left + top, dx: -(0.5in + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/columbia.png"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/columbia.png", width: size.width * scale))
    })))
    #strong[Intern], Bionet Group, Columbia University (#link("https://fruitflybrain.org")[fruitflybrain.org])

  ],
  [
    Jun 2017 – Aug 2017

  ],
  main-column-second-row: [
    - Programmed the vision system of a fruit fly robot to mimic the fruit fly's compound vision and motion detection, so that the robot could track, follow, and evade objects like a real fruit fly.

  ],
)

#regular-entry(
  [
    #place(left + top, dx: -(0.5in + 0.39in) / 2, box(width: 0.39in, align(center + top, context {
      // Fit within 0.39in by 0.24in, centered vertically on the title line, unlike `fit: "contain"`.
      let size = measure(image("logos/columbia.png"))
      let scale = calc.min(0.39in / size.width, 0.24in / size.height)
      // The title line runs from its cap height down to its baseline.
      let line-height = measure(text("H")).height
      move(dy: (line-height - size.height * scale) / 2, image("logos/columbia.png", width: size.width * scale))
    })))
    #strong[Intern], Dietrich Lab, Columbia University

  ],
  [
    Jun 2015 – Jul 2015

  ],
  main-column-second-row: [
    - Studied the wrinkling adaptation of bacterial biofilms, specifically of Pseudomonas aeruginosa and Bacillus subtilis, in response to oxygen deprivation.

  ],
)

== Skills

#strong[Transit Data:] OpenStreetMap, GTFS, GTFS-RT, GTFS Pathways, SIRI, RAPTOR, NFPA 130, GeoJSON, crowd modeling

#strong[Languages:] Rust, C, C++, Python, TypeScript, Kotlin, Java, Haskell, OCaml, x86\_64 and AArch64 asm, SQL, Bash

#strong[Software:] rustc, LLVM, Clang, gdb, WebAssembly, Node, React, Android (AOSP), Trusty TEE, DuckDB, SQLite, Claude

== Interests

Programming language design, tennis, baseball, quantum mechanics, endocrinology, optimization, trains, exploring cities
