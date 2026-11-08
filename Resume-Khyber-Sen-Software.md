# Khyber Sen's Resume

- Phone: +1 917 648 8677
- Email: [kkysen@gmail.com](mailto:kkysen@gmail.com)
- Location: NYC
- GitHub: [kkysen](https://github.com/kkysen)
- LinkedIn: [khyber-sen](https://linkedin.com/in/khyber-sen)


# Systems Software Engineer
Civic-minded systems engineer drawn to complex systems at every scale and across domains, from pure software such as compilers and operating systems to real-world housing markets, the human endocrine system, and transit networks. I find where these systems interact and break down, and how they can be optimized for the benefit of all.

# Education
## **Columbia University**, BA in CS: 3.79 GPA, 3.98 GPA in major, Rabi Scholar (gap year 2020–21)
Sep 2018 – Feb 2023



## **Stuyvesant High School**, 97.5 GPA unweighted, Scholar Athlete award
Sep 2014 – Jun 2018



# Experience
## **Software Engineer**, [Immunant](https://immunant.com/) -- Remote

May 2022 – Apr 2026

- [c2rust](https://github.com/immunant/c2rust): Core developer of c2rust, a C to Rust transpiler, as part of the DARPA ALLSTAR and TRACTOR programs, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

  - Integrated c2rust into [Hayroll](https://github.com/UW-HARVEST/Hayroll), a wrapper handling single-platform conditional compilation, then extended both to handle cross-platform compilation, in part by building off of zig cc.

  - Added transpiler support for C constant macros, translating them as Rust constants, and wrote c2rust-postprocess, using LLMs to reinsert comments the transpiler drops. Added support for emitting edition 2024 code.

  - Wrote a rustc instrumentation plugin to dynamically trace pointer usage and provenance throughout program runs, building a pointer derivation graph to complement a static analysis modeling pointer permissions.

- [rav1d](https://github.com/memorysafety/rav1d): Ported the bulk of the AV1 decoder dav1d from C to Rust, translating complex C idioms while preserving performance, and extensively optimizing the result, including instrumenting and modifying rustc where it differed from C. The result is just 5% slower than C's dav1d, with the initial unsafe transpile alone accounting for 3.8%.

- [IA2](https://github.com/immunant/IA2-Phase2): Helped develop IA2, a tool for sandboxing intraprocess compartments from each other's memory using x86_64's Memory Protection Keys and Arm's Memory Tagging Extension. Tested IA2 on dav1d, fixing bugs and adding features to handle a program as complex as dav1d, and added callgate data verification so data crossing the boundary between isolated compartments could be further verified.



## **Director of Transit Operations and Planning**, [Effective Transit Alliance](https://www.etany.org/) (ETA) -- NYC

Nov 2023 – present

- Advocating for better transit in the NY metro area through technical analysis drawing from international best practices. Meeting with journalists, MTA staff, and elected officials.

- [Penn Station Can Handle the Load](https://www.etany.org/penn-station-can-handle-the-load): rebuilt the passenger crowding model to show Penn Station can support 48 tph.

- [ETA Publish](https://github.com/effective-transit-alliance/eta-publish): built ETA's automated tool to publish reports from Google Docs.

- [515 Feet from Greatness](https://www.etany.org/ibx-all-faiths-tunnel): found street-running capacity errors in the study for the upcoming Interborough Express light rail line; the MTA then committed to the tunnel we advocated for, raising ridership 35% and speed 31%.

- [Digging Out of a Very Deep Hole](https://www.etany.org/reports/digging-out-deep-hole-sas-west): showed how shallower 125th St stations could save riders up to 10 min per trip and the MTA billions; under review by MTA planners.

- [Impeding Progress, Costing Riders](https://www.etany.org/statements/impeding-progress-costing-riders-opto): helped convince Governor Hochul to veto a 2025 bill that would have banned one-person train operation.



## **Communications Associate**, [QueensLink](https://thequeenslink.org/) -- NYC

Mar 2024 – present

- Advocating for QueensLink, a proposal to convert the abandoned Rockaway Beach Branch rail line through central Queens into a dual-use subway extension and linear park.

- [Subway Sheds](https://kkysen.github.io/subway-sheds/): mapped NYC subway isochrones with and without QueensLink, routing trains with RAPTOR, timing transfers and walks with OSM data, and scheduling QueensLink trains into MTA schedules with CP-SAT.



## **Compiler Intern**, MediaTek -- Woburn, MA

May 2020 – Dec 2021

- If Conversion: Replaced monomorphic branch unswitching with polymorphic if conversion for significant code size savings with minimal performance impact.

- Little Doctor: Built a framework for testing the compiler's debug info quality using gdb's Python API, which discovered hundreds of bugs in just 2 months.

- Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.



## **Rabi Scholar Researcher**, Columbia University ([SmartNeuralFuzzer](https://github.com/kkysen/SmartNeuralFuzzer))

Jan 2019 – Aug 2019

- Built an LLVM pass recording every branch decision of multi-threaded, multi-process programs, enabling record-replay debugging of control flow and feeding a neural net that guides fuzzing, taint analysis, and profile-guided optimizations, uncovering hidden data dependencies and elusive bugs.



## **Intern**, Bionet Group, Columbia University ([fruitflybrain.org](https://fruitflybrain.org))

Jun 2017 – Aug 2017

- Programmed the vision system of a fruit fly robot to mimic the fruit fly's compound vision and motion detection, so that the robot could track, follow, and evade objects like a real fruit fly.



# Recent Projects
## **[MTA OD Data](https://github.com/kkysen/mta-od-data) (Python, Rust)**

- Analyzed origin-destination (OD) data to quantify one-seat rides under different deinterlining scenarios.

- Used RAPTOR to turn OD data into trip paths to analyze ridership and crowding across lines, train cars, and platforms.



## **[Rail Runtime](https://github.com/kkysen/rail-runtime) (Python, Rust)**

- Computed minimum train runtimes from track geometry, train performance, and traction power limitations, and compared them with scheduled runtimes.

- Identified schedule padding hotspots and bottlenecks in signaling, junctions, and traction power.



## **[Ride Logger](https://github.com/kkysen/ride-measurement-app) (Rust, Kotlin, Python, Android)**

- Built an app to record rides and use sensor fusion (GNSS, IMU, cell, Wi-Fi, Bluetooth beacons, magnetometer, pedometer, microphone) to estimate speed and position underground, on trains and in stations.



# Skills
**Languages:** Rust, C, C++, Python, TypeScript, Kotlin, Java, Haskell, OCaml, x86_64 and AArch64 asm, SQL, Bash

**Software:** rustc, Polonius, LLVM, Clang, gdb, WebAssembly, Node, React, Android (AOSP), Trusty TEE, DuckDB, SQLite, Claude

# Interests
programming language design, tennis, baseball, quantum mechanics, endocrinology, optimization, trains, exploring cities
