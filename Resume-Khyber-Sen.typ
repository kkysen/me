// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Khyber Sen",
  title: "Khyber Sen - CV",
  footer: context { [#emph[Khyber Sen -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Aug 2026] ],
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
    month: 8,
    day: 5,
  ),
)


= Khyber Sen

#connections(
  [#link("mailto:kkysen@gmail.com", icon: false, if-underline: false, if-color: false)[kkysen\@gmail.com]],
  [#link("tel:+1-917-648-8677", icon: false, if-underline: false, if-color: false)[(917) 648-8677]],
  [#link("https://github.com/kkysen", icon: false, if-underline: false, if-color: false)[github.com\/kkysen]],
  [#link("https://linkedin.com/in/khyber-sen", icon: false, if-underline: false, if-color: false)[linkedin.com\/in\/khyber-sen]],
)


== Education

#education-entry(
  [
    #strong[Columbia University], Computer Science

  ],
  [
    Sept 2018 – Dec 2022

  ],
  main-column-second-row: [
    #summary[Rabi Scholar, CS Major (GPA 3.79, CS GPA 3.98)]

    - Gap year 2020-2021

  ],
)

#education-entry(
  [
    #strong[Stuyvesant High School], High School Diploma

  ],
  [
    Sept 2014 – June 2018

  ],
  main-column-second-row: [
    #summary[97.5 GPA unweighted, Captain of Varsity Baseball Team]

  ],
)

== Experience

#regular-entry(
  [
    #strong[Junior Software Engineer (previously Intern)], Immunant

  ],
  [
    May 2022 – present

  ],
  main-column-second-row: [
    - #link("https://github.com/immunant/c2rust")[github.com\/immunant\/c2rust]

    - Worked on c2rust, a C to Rust transpiler, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

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
    - If Conversion: Replaced monomorphic branch unswitching with polymorphic if conversion for significant code size savings with minimal performance impact.

    - Little Doctor: Built the Little Doctor, a framework for testing the compiler's debug info's quality using gdb's Python API, which already discovered hundreds of bugs in 2 months.

    - Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.

  ],
)

#regular-entry(
  [
    #strong[Teaching Assistant, Analysis of Algorithms (taught by Prof. Clifford Stein)], Columbia University

  ],
  [
    Sept 2019 – Dec 2019

  ],
  main-column-second-row: [
    - Acted as liaison between professor and students.

    - Graded exams and problem sets for a class of 140 students.

    - Taught students during office hours and answered email questions throughout the week.

  ],
)

#regular-entry(
  [
    #strong[Smart Neural Fuzzer Intern], Columbia University

  ],
  [
    Jan 2019 – Aug 2019

  ],
  main-column-second-row: [
    - #link("https://github.com/kkysen/SmartNeuralFuzzer")[github.com\/kkysen\/SmartNeuralFuzzer]

    - Developed a code coverage tool that records all the decisions (branches) a potentially multi-threaded, multi-process program makes, which allows for time travel and record-replay debugging of control flow. Collaborated with Kexin Pei and Junfeng Yang to integrate this decision data into a neural net that can intelligently guide fuzzing, taint analysis, and profile-guided optimizations, helping to uncover hidden data dependencies and elusive bugs. Written in modern C++17 as an LLVM optimization pass.

  ],
)

#regular-entry(
  [
    #strong[Fruit Fly Brain Observatory Intern], Columbia University

  ],
  [
    June 2017 – Aug 2017

  ],
  main-column-second-row: [
    - Built a robot to model the fruit fly vision system and its motion detection capabilities using massively parallel programming (under the direction of Aurel Lazar).

  ],
)

== Projects

#regular-entry(
  [
    #strong[#link("https://github.com/codeprentice-org/fanotify")[Change Journal at Codeprentice] (Rust)]

  ],
  [
    May 2022 – Aug 2022

  ],
  main-column-second-row: [
    - Leading a 5-person team at Codeprentice on the Change Journal project. We are developing a cross-platform change journal library in Rust, using the fanotify backend on Linux and the USN journal backend on Windows we're writing. Ultimately we plan to use the change journal to create an instantaneous and cross-platform file searcher application. I have also helped teach my teammates Rust.

  ],
)

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

#strong[Languages:] Rust, Kotlin, TypeScript, C++, C, Python, Java, Haskell, OCaml, x86 asm, Bash

#strong[Software:] rustc, Polonius, LLVM, Clang, gdb (Python API), WebAssembly, Linux, JVM, Graal, Node, Deno, Bun, React, CMake, Webpack

== Honors

- 1st Place, Two Sigma Data Science Competition

- 1st Place, PClassic Programming Competition at UPenn

- Scholar Athlete, 850-person high school class

== Interests

#strong[Interests:] Programming Language Design, Tennis, Baseball, Quantum Mechanics, Endocrinology, Optimization, Trains
