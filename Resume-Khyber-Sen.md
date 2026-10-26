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

- IBX

  - [IBX: 515 Feet from Greatness](https://www.etany.org/ibx-all-faiths-tunnel) (Project Manager): advocated for a short, shallow All Faiths Tunnel, after which the MTA changed course from its street-running plans and adopted the shallow-tunnel approach, increasing projected ridership by 35%, reducing travel times by 31%, and saving a cumulative 3 years of riders' time per day.

- 125 St Subway

  - [Digging Out of a Very Deep Hole: Saving Billions on 125th Street](https://www.etany.org/reports/digging-out-deep-hole-sas-west) (Project Manager): how to build shallower stations that save riders up to 10 min per trip and the MTA billions by using the latest in subway construction techniques.

- Better Subway Service

  - [Impeding Progress, Costing Riders: Bill Banning One-Person Trains Would Lock NY Transit in the Past](https://www.etany.org/statements/impeding-progress-costing-riders-opto): helped convince Governor Hochul to veto a 2025 bill that would have banned one-person train operation, preventing New York's transit system from being locked out of future modernization.

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

  - Wrote a rustc instrumentation plugin to dynamically trace pointer usage and provenance throughout program runs, building a pointer derivation graph to complement a static analysis modelling pointer permissions. Integrated the dynamic analysis outputs into the static analysis, modelled pointer permissions for known libc functions, and fixed how string literals and casts were analyzed.

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

- Built an LLVM pass recording every branch decision of multi-threaded, multi-process programs, enabling record-replay debugging of control flow and guiding a neural net-based fuzzer.



## **Intern**, Bionet Group, Columbia University ([fruitflybrain.org](https://fruitflybrain.org))

June 2017 – Aug 2017

- Programmed the vision system of a fruit fly robot to mimic the fruit fly's compound vision and motion detection, so that the robot could track, follow, and evade objects like a real fruit fly.



## **Intern**, Dietrich Lab, Columbia University

June 2015 – July 2015

- Studied the wrinkling adaptation of bacterial biofilms, specifically of Pseudomonas aeruginosa and Bacillus subtilis, in response to oxygen deprivation.



# Skills
**Transit Data:** OpenStreetMap, GTFS, GTFS-RT, GTFS Pathways, SIRI, RAPTOR, NFPA 130, GeoJSON, passenger crowding modeling

**Languages:** Rust, C, C++, Python, TypeScript, Kotlin, Java, Haskell, OCaml, x86_64 and AArch64 asm, SQL, Bash

**Software:** rustc, LLVM, Clang, gdb, WebAssembly, Node, React, Android (AOSP), DuckDB, SQLite, Claude

# Interests
**Interests:** Programming Language Design, Tennis, Baseball, Quantum Mechanics, Endocrinology, Optimization, Trains
