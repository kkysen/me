# Khyber Sen's Resume

- Phone: +1 917 648 8677
- Email: [kkysen@gmail.com](mailto:kkysen@gmail.com)
- Location: New York, NY
- GitHub: [kkysen](https://github.com/kkysen)
- LinkedIn: [khyber-sen](https://linkedin.com/in/khyber-sen)


# Education
## **Columbia University**, BA in Computer Science
Sept 2018 – Feb 2023

Rabi Scholar, CS Major (GPA 3.79, CS GPA 3.98)

- Gap year 2020-2021



## **Stuyvesant High School**, High School Diploma
Sept 2014 – June 2018

97.5 GPA unweighted, Captain of Varsity Baseball Team



# Experience
## **Director of Transit Operations and Planning**, Effective Transit Alliance -- New York City Metropolitan Area

Nov 2023 – present

- Advocate for better public transit in the New York City metropolitan area.

- Following ETA's IBX report advocating for a short, shallow All Faiths Tunnel, the MTA changed course from its street-running plans and adopted the shallow-tunnel approach, increasing projected ridership by 35%, reducing travel times by 31%, and saving a cumulative 3 years of riders' time per day.

- Helped convince Governor Hochul to veto a 2025 bill that would have banned OPTO, preventing New York's transit system from being locked out of future modernization.

- Selected media: "Digging Out of a Very Deep Hole: Saving Billions on 125th Street", "The Century Old Idea that Can Revolutionize NYC Commuter Rail", and "Did NYC's Newest Subway Just Get Better?"



## **Communications Associate (previously Volunteer)**, QueensLink -- Queens, NY

Mar 2024 – present

- [thequeenslink.org/the-plan](https://thequeenslink.org/the-plan/)

- Advocate for QueensLink, a proposal to convert the abandoned Rockaway Beach Branch rail line through central Queens into a dual-use subway extension and linear park.



## **Software Engineer (previously Junior Software Engineer, Intern)**, Immunant -- Remote

May 2022 – Apr 2026

- [github.com/immunant/c2rust](https://github.com/immunant/c2rust) | [github.com/memorysafety/rav1d](https://github.com/memorysafety/rav1d)

- Core developer of c2rust, a C to Rust transpiler, as part of the DARPA ALLSTAR and TRACTOR programs, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

- Integrated c2rust into Hayroll, a wrapper handling single-platform conditional compilation, then extended both to handle cross-platform compilation, in part by building off of zig cc.

- Added transpiler support for C constant macros, translating them as Rust constants, and wrote c2rust-postprocess, reinserting comments lost by the transpiler using LLMs. Added support for emitting edition 2024 code.

- Greatly strengthened testing, adding snapshot tests for the transpiler, reviving c2rust-refactor and dynamic analysis, and extending the integration test suite of various codebases.

- Wrote a rustc instrumentation plugin to dynamically trace pointer usage and provenance throughout program runs, building a pointer derivation graph to complement a static analysis modelling pointer permissions. Integrated the dynamic analysis outputs into the static analysis, modelled pointer permissions for known libc functions, and fixed how string literals and casts were analyzed.

- Ported the bulk of the AV1 decoder dav1d from C to Rust, now named rav1d, translating complex C idioms while preserving performance, and extensively optimizing the result, including instrumenting and modifying rustc where it differed from C. The result is just 5% slower than C's dav1d, 3.8% of which comes from the initial unsafe transpile.

- Helped develop IA2, a tool for sandboxing intraprocess compartments from each other's memory using x86_64's Memory Protection Keys and Arm's Memory Tagging Extension (MTE). Tested IA2 on dav1d, fixing bugs and adding features to handle a program as complex as dav1d, and added callgate data verification so data crossing the boundary between isolated compartments could be further verified.



## **Compiler Intern**, MediaTek -- Woburn, MA

May 2020 – Dec 2021

- If Conversion: Replaced monomorphic branch unswitching with polymorphic if conversion for significant code size savings with minimal performance impact.

- Little Doctor: Built the Little Doctor, a framework for testing the compiler's debug info's quality using gdb's Python API, which already discovered hundreds of bugs in 2 months.

- Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.



## **Teaching Assistant, Analysis of Algorithms (taught by Prof. Clifford Stein)**, Columbia University

Sept 2019 – Jan 2020

- Acted as liaison between professor and students.

- Graded exams and problem sets for a class of 140 students.

- Taught students during office hours and answered email questions throughout the week.



## **Rabi Scholar Researcher (Smart Neural Fuzzer Internship)**, Columbia University

Jan 2019 – Aug 2019

- [github.com/kkysen/SmartNeuralFuzzer](https://github.com/kkysen/SmartNeuralFuzzer)

- Developed a code coverage tool that records all the decisions (branches) a potentially multi-threaded, multi-process program makes, which allows for time travel and record-replay debugging of control flow. Collaborated with Ph.D. student Kexin Pei and Prof. Junfeng Yang to integrate this decision data into a neural net that can intelligently guide fuzzing, taint analysis, and profile-guided optimizations, helping to uncover hidden data dependencies and elusive bugs. Written in modern C++17 as an LLVM optimization pass.



## **Summer Intern (Fruit Fly Brain Observatory)**, Bionet Group, Columbia University

June 2017 – Aug 2017

- [fruitflybrain.org](https://fruitflybrain.org)

- Worked on the Fruit Fly Brain Observatory, an international research initiative to understand the fruit fly brain and model it using GPU-based programming, under the direction of Aurel Lazar.

- Programmed the vision system of a fruit fly robot to mimic the fruit fly's compound vision and motion detection, so that the robot could track, follow, and evade objects like a real fruit fly.



## **Summer Intern**, Dietrich Lab, Columbia University

June 2015 – July 2015

- Studied the wrinkling adaptation of bacterial biofilms, specifically of Pseudomonas aeruginosa and Bacillus subtilis, in response to oxygen deprivation.



# Projects
## **[Change Journal at Codeprentice](https://github.com/codeprentice-org/fanotify) (Rust)**

May 2022 – Aug 2022

- Leading a 5-person team at Codeprentice on the Change Journal project. We are developing a cross-platform change journal library in Rust, using the fanotify backend on Linux and the USN journal backend on Windows we're writing. Ultimately we plan to use the change journal to create an instantaneous and cross-platform file searcher application. I have also helped teach my teammates Rust.



## **[N Queens](https://github.com/kkysen/MKS22X/blob/master/02NQueens/NQueens.java) (Java)**

- Developed a novel, extremely efficient bitwise solution to the classic N Queens problem faster than any other known software solution.



## **[Flight Delay Visualizer](https://github.com/kkysen/r3d3) (TypeScript, WebAssembly (C++17), d3)**

- Designed an interactive website to visualize all 6 million flights over the US in the past year, watching how certain airlines and airports are chronically delayed, and applying complex filters to the flights. Used C++ compiled to WebAssembly to make it feasible performance- and memory-wise.



## **[Weather or Not at Stuy Hacks](https://github.com/wertylop5/WeatherOrNot) (JS)**

- Led a 4-person team in 24 hours, ~200-person Major League Hackathon. My team created a website that overlays maps, traffic, weather, and more to better plan your trip.



# Skills
**Languages:** Rust, Kotlin, TypeScript, C++, C, Python, Java, Haskell, OCaml, x86 asm, Bash

**Software:** rustc, Polonius, LLVM, Clang, gdb (Python API), WebAssembly, Linux, JVM, Graal, Node, Deno, Bun, React, CMake, Webpack

# Honors
- 1st Place, Two Sigma Data Science Competition

- 1st Place, PClassic Programming Competition at UPenn

- Scholar Athlete, 850-person high school class

# Interests
**Interests:** Programming Language Design, Tennis, Baseball, Quantum Mechanics, Endocrinology, Optimization, Trains
