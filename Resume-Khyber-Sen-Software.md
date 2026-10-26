# Khyber Sen's Resume

- Phone: +1 917 648 8677
- Email: [kkysen@gmail.com](mailto:kkysen@gmail.com)
- Location: New York, NY
- GitHub: [kkysen](https://github.com/kkysen)
- LinkedIn: [khyber-sen](https://linkedin.com/in/khyber-sen)


# Education
## **Columbia University**, BA in Computer Science
Sept 2018 – Feb 2023


(Gap year 2020–2021)

GPA 3.79, GPA in major 3.98, Rabi Scholar



## **Stuyvesant High School**
Sept 2014 – June 2018

97.5 GPA unweighted, Scholar Athlete award



# Experience
## Effective Transit Alliance, **Director of Transit Operations and Planning** -- NYC

Nov 2023 – present

- Advocate for better public transit in the NY Metro Area.

- Built the passenger crowding model for [Penn Station Can Handle the Load](https://www.etany.org/penn-station-can-handle-the-load), a rebuttal of Amtrak's report claiming through-running cannot support 48 tph.



## QueensLink, **Communications Associate** (previously Volunteer) -- Queens, NY

Mar 2024 – present

- Advocate for QueensLink, a proposal to convert the abandoned Rockaway Beach Branch rail line through central Queens into a dual-use subway extension and linear park.



## Immunant, **Software Engineer** (previously Junior Software Engineer, Intern) -- Remote

May 2022 – Apr 2026

- [github.com/immunant/c2rust](https://github.com/immunant/c2rust) | [github.com/memorysafety/rav1d](https://github.com/memorysafety/rav1d)

- Core developer of c2rust, a C to Rust transpiler, as part of the DARPA ALLSTAR and TRACTOR programs, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

- Integrated c2rust into Hayroll, a wrapper handling single-platform conditional compilation, then extended both to handle cross-platform compilation, in part by building off of zig cc.

- Added transpiler support for C constant macros, translating them as Rust constants, and wrote c2rust-postprocess, reinserting comments lost by the transpiler using LLMs. Added support for emitting edition 2024 code.

- Greatly strengthened testing, adding snapshot tests for the transpiler, reviving c2rust-refactor and dynamic analysis, and extending the integration test suite of various codebases.

- Wrote a rustc instrumentation plugin to dynamically trace pointer usage and provenance throughout program runs, building a pointer derivation graph to complement a static analysis modelling pointer permissions. Integrated the dynamic analysis outputs into the static analysis, modelled pointer permissions for known libc functions, and fixed how string literals and casts were analyzed.

- Ported the bulk of the AV1 decoder dav1d from C to Rust, now named rav1d, translating complex C idioms while preserving performance, and extensively optimizing the result, including instrumenting and modifying rustc where it differed from C. The result is just 5% slower than C's dav1d, 3.8% of which comes from the initial unsafe transpile.

- Helped develop IA2, a tool for sandboxing intraprocess compartments from each other's memory using x86_64's Memory Protection Keys and Arm's Memory Tagging Extension (MTE). Tested IA2 on dav1d, fixing bugs and adding features to handle a program as complex as dav1d, and added callgate data verification so data crossing the boundary between isolated compartments could be further verified.



## MediaTek, **Compiler Intern** -- Woburn, MA

May 2020 – Dec 2021

- If Conversion: Replaced monomorphic branch unswitching with polymorphic if conversion for significant code size savings with minimal performance impact.

- Little Doctor: Built the Little Doctor, a framework for testing the compiler's debug info's quality using gdb's Python API, which already discovered hundreds of bugs in 2 months.

- Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.



## Columbia University, **Teaching Assistant**, Analysis of Algorithms (Prof. Clifford Stein)

Sept 2019 – Jan 2020



## Columbia University, **Rabi Scholar Researcher** ([github.com/kkysen/SmartNeuralFuzzer](https://github.com/kkysen/SmartNeuralFuzzer))

Jan 2019 – Aug 2019

- Developed a code coverage tool that records all the decisions (branches) a potentially multi-threaded, multi-process program makes, which allows for time travel and record-replay debugging of control flow. Collaborated with Ph.D. student Kexin Pei and Prof. Junfeng Yang to integrate this decision data into a neural net that can intelligently guide fuzzing, taint analysis, and profile-guided optimizations, helping to uncover hidden data dependencies and elusive bugs. Written in modern C++17 as an LLVM optimization pass.



## Bionet Group, Columbia University, **Summer Intern** ([fruitflybrain.org](https://fruitflybrain.org))

June 2017 – Aug 2017

- Programmed the vision system of a fruit fly robot to mimic the fruit fly's compound vision and motion detection, so that the robot could track, follow, and evade objects like a real fruit fly.



# Projects
## **[Change Journal at Codeprentice](https://github.com/codeprentice-org/fanotify) (Rust)**

May 2022 – Aug 2022

- Leading a 5-person team at Codeprentice on the Change Journal project. We are developing a cross-platform change journal library in Rust, using the fanotify backend on Linux and the USN journal backend on Windows we're writing. Ultimately we plan to use the change journal to create an instantaneous and cross-platform file searcher application. I have also helped teach my teammates Rust.



## **[N Queens](https://github.com/kkysen/MKS22X/blob/master/02NQueens/NQueens.java) (Java)**

- Developed a novel, extremely efficient bitwise solution to the classic N Queens problem faster than any other known software solution.



## **[Flight Delay Visualizer](https://github.com/kkysen/r3d3) (TypeScript, WebAssembly (C++17), d3)**

- Designed an interactive website to visualize all 6 million flights over the US in the past year, watching how certain airlines and airports are chronically delayed, and applying complex filters to the flights. Used C++ compiled to WebAssembly to make it feasible performance- and memory-wise.



# Skills
**Languages:** Rust, C, C++, Python, TypeScript, Kotlin, Java, x86 asm, Bash

**Software:** rustc, LLVM, Clang, gdb, WebAssembly, Linux, CMake, Node, React

# Honors
- 1st Place, Two Sigma Data Science Competition

- 1st Place, PClassic Programming Competition at UPenn

# Interests
**Interests:** Programming Language Design, Tennis, Baseball, Quantum Mechanics, Endocrinology, Optimization, Trains
