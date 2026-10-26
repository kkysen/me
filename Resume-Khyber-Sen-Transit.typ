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
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: false,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 0, 0),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
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
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
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
  sections-space-between-regular-entries: 0.42cm,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-degree-width: 1cm,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.08cm,
  entries-highlights-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-nested-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-space-left: 0cm,
  entries-highlights-space-above: 0.08cm,
  entries-highlights-space-between-items: 0.08cm,
  entries-highlights-space-between-bullet-and-text: 0.3em,
  date: datetime(
    year: 2026,
    month: 10,
    day: 25,
  ),
)


= Khyber Sen

  #headline([Software Engineer])

#connections(
  [New York, NY],
  [#link("mailto:kkysen@gmail.com", icon: false, if-underline: false, if-color: false)[kkysen\@gmail.com]],
  [#link("tel:+1-917-648-8677", icon: false, if-underline: false, if-color: false)[(917) 648-8677]],
  [#link("https://github.com/kkysen", icon: false, if-underline: false, if-color: false)[github.com\/kkysen]],
  [#link("https://linkedin.com/in/khyber-sen", icon: false, if-underline: false, if-color: false)[linkedin.com\/in\/khyber-sen]],
)


== Education

#education-entry(
  [
    #strong[Columbia University], BA in Computer Science

    #summary[GPA 3.79, GPA in major 3.98, Rabi Scholar]

  ],
  [
    Sept 2018 – Feb 2023

    (Gap year 2020–2021)

  ],
  main-column-second-row: [
  ],
)

#education-entry(
  [
    #strong[Stuyvesant High School]

  ],
  [
    Sept 2014 – June 2018

  ],
  main-column-second-row: [
    #summary[97.5 GPA unweighted, Scholar Athlete award]

  ],
)

== Experience

#regular-entry(
  [
    #strong[Director of Transit Operations and Planning], Effective Transit Alliance -- NYC

  ],
  [
    Nov 2023 – present

  ],
  main-column-second-row: [
    - Advocate for better public transit in the NY Metro Area.

    - Following ETA's IBX report (#link("https://www.etany.org/ibx-all-faiths-tunnel")[IBX: 515 Feet from Greatness]) advocating for a short, shallow All Faiths Tunnel, the MTA changed course from its street-running plans and adopted the shallow-tunnel approach, increasing projected ridership by 35\%, reducing travel times by 31\%, and saving a cumulative 3 years of riders' time per day.

    - Helped convince Governor Hochul to veto a 2025 bill that would have banned OPTO (#link("https://www.etany.org/statements/impeding-progress-costing-riders-opto")[Impeding Progress, Costing Riders]), preventing New York's transit system from being locked out of future modernization.

    - #link("https://www.etany.org/reports/digging-out-deep-hole-sas-west")[Digging Out of a Very Deep Hole: Saving Billions on 125th Street]: a shallower 125 St subway route, against a \$7.7B plan with stations over 100 ft underground.

    - Built the passenger crowding model for #link("https://www.etany.org/penn-station-can-handle-the-load")[Penn Station Can Handle the Load], a rebuttal of Amtrak's report claiming through-running cannot support 48 tph.

    - #link("https://www.etany.org/a-not-so-capital-plan-1-most-expensive-subway-train")[A Not-So-Capital Plan, Part 1] and #link("https://www.etany.org/not-so-capital-plan-the-future-is-electric")[Part 2]: the MTA's 2025-29 Capital Plan, on subway rolling stock cost explosion and on commuter rail electrification.

    - #link("https://www.etany.org/repairing-northeast-corridor-electrical-system")[If It Can't Stand the Heat, You Need to Upgrade the Kitchen]: repairing the Northeast Corridor's electrical systems.

    - #link("https://www.etany.org/statements/deinterlining")[Deinterlining]: simpler service, fewer delays.

    - #link("https://www.etany.org/baffling-battery-blunder")[Baffling Battery Blunder]: expensive, experimental, slow battery locomotives have no place on already electrified rails.

    - Videos: #link("https://www.youtube.com/watch?v=l0xR6V-GIzc")[The Century Old Idea that Can Revolutionize NYC Commuter Rail] and #link("https://www.youtube.com/watch?v=5FgyHCl6E3A")[Did NYC's Newest Subway Just Get Better?]

  ],
)

#regular-entry(
  [
    #strong[Communications Associate (previously Volunteer)], QueensLink -- Queens, NY

  ],
  [
    Mar 2024 – present

  ],
  main-column-second-row: [
    - #link("https://thequeenslink.org/the-plan/")[thequeenslink.org\/the-plan]

    - Advocate for QueensLink, a proposal to convert the abandoned Rockaway Beach Branch rail line through central Queens into a dual-use subway extension and linear park.

  ],
)

#regular-entry(
  [
    #strong[Software Engineer (previously Junior Software Engineer, Intern)], Immunant -- Remote

  ],
  [
    May 2022 – Apr 2026

  ],
  main-column-second-row: [
    - Core developer of c2rust, a C to Rust transpiler, as part of the DARPA ALLSTAR and TRACTOR programs, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

    - Greatly strengthened testing, adding snapshot tests for the transpiler, reviving c2rust-refactor and dynamic analysis, and extending the integration test suite of various codebases.

    - Ported the bulk of the AV1 decoder dav1d from C to Rust, now named rav1d, translating complex C idioms while preserving performance, and extensively optimizing the result, including instrumenting and modifying rustc where it differed from C. The result is just 5\% slower than C's dav1d, 3.8\% of which comes from the initial unsafe transpile.

  ],
)

#regular-entry(
  [
    #strong[Compiler Intern], MediaTek -- Woburn, MA

  ],
  [
    May 2020 – Dec 2021

  ],
  main-column-second-row: [
    - Little Doctor: Built the Little Doctor, a framework for testing the compiler's debug info's quality using gdb's Python API, which already discovered hundreds of bugs in 2 months.

    - Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.

  ],
)

#regular-entry(
  [
    #strong[Teaching Assistant, Analysis of Algorithms (taught by Prof. Clifford Stein)], Columbia University

  ],
  [
    Sept 2019 – Jan 2020

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Rabi Scholar Researcher (Smart Neural Fuzzer Internship)], Columbia University

  ],
  [
    Jan 2019 – Aug 2019

  ],
  main-column-second-row: [
    - #link("https://github.com/kkysen/SmartNeuralFuzzer")[github.com\/kkysen\/SmartNeuralFuzzer]

    - Built an LLVM pass recording every branch decision of multi-threaded, multi-process programs, enabling record-replay debugging of control flow and guiding a neural net-based fuzzer.

  ],
)

== Transit Projects

#regular-entry(
  [
    #strong[#link("https://github.com/kkysen/mta-od-data")[MTA OD Data] (Python)]

  ],
  [
    Aug 2026 – present

  ],
  main-column-second-row: [
    - Analyzed MTA's public subway origin-destination ridership data to quantify, for proposed deinterlining scenarios, the share of one-seat rides lost and how many of those riders would still be a short walk from the other trunk.

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/kkysen/rail-runtime")[Rail Runtime] (Python)]

  ],
  [
    Oct 2026 – present

  ],
  main-column-second-row: [
    - Computed minimum train runtimes from track geometry and train performance, and compared them with scheduled timetables for LIRR services into Penn Station, Grand Central Madison, and Atlantic Terminal.

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/kkysen/subway-sheds")[Subway Sheds] (Python, R5)]

  ],
  [
    Oct 2026 – present

  ],
  main-column-second-row: [
    - Mapped how far you can get on the NYC subway in a given time, with and without QueensLink, routed with R5 over the real street network and counting waits for trains.

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/kkysen/ride-measurement-app")[Ride Logger] (Rust, Android, Python)]

  ],
  [
    Oct 2026 – present

  ],
  main-column-second-row: [
    - Built an Android app recording rides (trains, buses, planes) from phone sensors without ever losing data, with a Rust session format, CLI, and Python bindings for analysis.

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/effective-transit-alliance/eta-publish")[ETA Publish] (Python)]

  ],
  [
    Aug 2026 – present

  ],
  main-column-second-row: [
    - Built ETA's tool converting report Google Docs into publish-ready HTML, Markdown, and PDF, replacing a manual, error-prone hand-off to Squarespace.

  ],
)

== Projects

  #regular-entry(
  [
    #strong[#link("https://github.com/kkysen/MKS22X/blob/master/02NQueens/NQueens.java")[N Queens] (Java)]

  ],
  [
  ],
  main-column-second-row: [
    - Developed a novel, extremely efficient bitwise solution to the classic N Queens problem faster than any other known software solution.

  ],
)

  #regular-entry(
  [
    #strong[#link("https://github.com/kkysen/r3d3")[Flight Delay Visualizer] (TypeScript, WebAssembly (C++17), d3)]

  ],
  [
  ],
  main-column-second-row: [
    - Designed an interactive website to visualize all 6 million flights over the US in the past year, watching how certain airlines and airports are chronically delayed, and applying complex filters to the flights. Used C++ compiled to WebAssembly to make it feasible performance- and memory-wise.

  ],
)

  #regular-entry(
  [
    #strong[#link("https://github.com/wertylop5/WeatherOrNot")[Weather or Not at Stuy Hacks] (JS)]

  ],
  [
  ],
  main-column-second-row: [
    - Led a 4-person team in 24 hours, \~200-person Major League Hackathon. My team created a website that overlays maps, traffic, weather, and more to better plan your trip.

  ],
)

== Skills

#strong[Transit Data:] GTFS, GTFS-RT, transit open datasets, Python\/pandas analysis, GeoJSON, passenger crowding modeling

#strong[Languages:] Rust, C, C++, Python, TypeScript, Kotlin, Java, x86 asm, Bash

== Honors

- 1st Place, Two Sigma Data Science Competition

- 1st Place, PClassic Programming Competition at UPenn

== Interests

#strong[Interests:] Programming Language Design, Tennis, Baseball, Quantum Mechanics, Endocrinology, Optimization, Trains
