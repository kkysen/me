# Khyber Sen's Resume

- Phone: +1 917 648 8677
- Email: [kkysen@gmail.com](mailto:kkysen@gmail.com)
- Location: NYC
- GitHub: [kkysen](https://github.com/kkysen)
- LinkedIn: [khyber-sen](https://linkedin.com/in/khyber-sen)


# Summary
Civic-minded systems engineer drawn to complex systems at every scale and across domains, from pure software like compilers and operating systems to real-world housing markets, the human endocrine system, and transit networks. I find where these systems interact and break down, and how they can be optimized for the benefit of all.

# Education
## **Columbia University**, BA in Computer Science
Sept 2018 – Feb 2023


(Gap year 2020–2021)

3.79 GPA, 3.98 GPA in major, Rabi Scholar



## **Stuyvesant High School**
Sept 2014 – June 2018

97.5 GPA unweighted, Scholar Athlete award



# Experience
## **Director of Transit Operations and Planning**, [Effective Transit Alliance](https://www.etany.org/) (ETA) -- NYC

Nov 2023 – present

- Advocating for better transit in the NY metro area through technical analysis drawing from international best practices. Meeting with journalists, MTA staff, and elected officials. Researching and developing expertise in the latest advances in rolling stock, electrification, tunneling and station construction, service optimization, signaling, and automation.

- Attended transit conferences across the world to learn best practices from peer cities:

  - InnoTrans 2026 in Berlin

  - 10 TransportationCamps in NYC, Philadelphia, Boston, and DC

- Penn Station Through-Running

  - [Penn Station Can Handle the Load: New York is Ready for Through-Running](https://www.etany.org/penn-station-can-handle-the-load): rebuilt the passenger crowding model to show Penn Station can safely support 48 tph.



## **Board Member**, [Joint Transit Association](https://jointtransit.org/) (JTA) -- NYC

May 2026 – present



## **Communications Associate**, [QueensLink](https://thequeenslink.org/) -- NYC

Mar 2024 – present

- Advocating for QueensLink, a proposal to convert the abandoned Rockaway Beach Branch rail line through central Queens into a dual-use subway extension and linear park.



## **Software Engineer**, [Immunant](https://immunant.com/) -- Remote

May 2022 – Apr 2026

- [c2rust](https://github.com/immunant/c2rust): Core developer of c2rust, a C to Rust transpiler, as part of the DARPA ALLSTAR and TRACTOR programs, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

  - Integrated c2rust into [Hayroll](https://github.com/UW-HARVEST/Hayroll), a wrapper handling single-platform conditional compilation, then extended both to handle cross-platform compilation, in part by building off of zig cc.

  - Added transpiler support for C constant macros, translating them as Rust constants, and wrote c2rust-postprocess, reinserting comments lost by the transpiler using LLMs. Added support for emitting edition 2024 code.

  - Greatly strengthened testing, adding snapshot tests for the transpiler, reviving c2rust-refactor and dynamic analysis, and extending the integration test suite of various codebases.

  - Wrote a rustc instrumentation plugin to dynamically trace pointer usage and provenance throughout program runs, building a pointer derivation graph to complement a static analysis modeling pointer permissions. Integrated the dynamic analysis outputs into the static analysis, modeled pointer permissions for known libc functions, and fixed how string literals and casts were analyzed.

- [rav1d](https://github.com/memorysafety/rav1d): Ported the bulk of the AV1 decoder dav1d from C to Rust, translating complex C idioms while preserving performance, and extensively optimizing the result, including instrumenting and modifying rustc where it differed from C. The result is just 5% slower than C's dav1d, 3.8% of which comes from the initial unsafe transpile.

- [IA2](https://github.com/immunant/IA2-Phase2): Helped develop IA2, a tool for sandboxing intraprocess compartments from each other's memory using x86_64's Memory Protection Keys and Arm's Memory Tagging Extension (MTE). Tested IA2 on dav1d, fixing bugs and adding features to handle a program as complex as dav1d, and added callgate data verification so data crossing the boundary between isolated compartments could be further verified.



## **Compiler Intern**, MediaTek -- Woburn, MA

May 2020 – Dec 2021

- If Conversion: Replaced monomorphic branch unswitching with polymorphic if conversion for significant code size savings with minimal performance impact.

- Little Doctor: Built the Little Doctor, a framework for testing the compiler's debug info's quality using gdb's Python API, which already discovered hundreds of bugs in 2 months.

- Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.



## **Teaching Assistant**, Analysis of Algorithms (Prof. Clifford Stein), Columbia University

Sept 2019 – Jan 2020



## **Rabi Scholar Researcher**, Columbia University ([SmartNeuralFuzzer](https://github.com/kkysen/SmartNeuralFuzzer))

Jan 2019 – Aug 2019

- Built an LLVM pass recording every branch decision of multi-threaded, multi-process programs, enabling record-replay debugging of control flow and feeding a neural net that guides fuzzing, taint analysis, and profile-guided optimizations, uncovering hidden data dependencies and elusive bugs.



## **Intern**, Bionet Group, Columbia University ([fruitflybrain.org](https://fruitflybrain.org))

June 2017 – Aug 2017

- Programmed the vision system of a fruit fly robot to mimic the fruit fly's compound vision and motion detection, so that the robot could track, follow, and evade objects like a real fruit fly.



# Skills
**Languages:** Rust, C, C++, Python, TypeScript, Kotlin, Java, Haskell, OCaml, x86_64 and AArch64 asm, SQL, Bash

**Software:** rustc, LLVM, Clang, gdb, WebAssembly, Node, React, Android (AOSP), Trusty TEE, DuckDB, SQLite, Claude

# Interests
Programming language design, tennis, baseball, quantum mechanics, endocrinology, optimization, trains, exploring cities
