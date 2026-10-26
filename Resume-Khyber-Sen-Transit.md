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

Rabi Scholar (GPA 3.79, GPA in major 3.98)



## **Stuyvesant High School**, High School Diploma
Sept 2014 – June 2018

97.5 GPA unweighted, Captain of Varsity Baseball Team, Scholar Athlete



# Experience
## **Director of Transit Operations and Planning**, Effective Transit Alliance -- New York City Metropolitan Area

Nov 2023 – present

- Advocate for better public transit in the New York City metropolitan area.

- Following ETA's IBX report ([IBX: 515 Feet from Greatness](https://www.etany.org/ibx-all-faiths-tunnel)) advocating for a short, shallow All Faiths Tunnel, the MTA changed course from its street-running plans and adopted the shallow-tunnel approach, increasing projected ridership by 35%, reducing travel times by 31%, and saving a cumulative 3 years of riders' time per day.

- Helped convince Governor Hochul to veto a 2025 bill that would have banned OPTO ([Impeding Progress, Costing Riders](https://www.etany.org/statements/impeding-progress-costing-riders-opto)), preventing New York's transit system from being locked out of future modernization.

- [Digging Out of a Very Deep Hole: Saving Billions on 125th Street](https://www.etany.org/reports/digging-out-deep-hole-sas-west): a shallower 125 St subway route, against a $7.7B plan with stations over 100 ft underground.

- Built the passenger crowding model for [Penn Station Can Handle the Load](https://www.etany.org/penn-station-can-handle-the-load), a rebuttal of Amtrak's report claiming through-running cannot support 48 tph.

- [A Not-So-Capital Plan, Part 1](https://www.etany.org/a-not-so-capital-plan-1-most-expensive-subway-train) and [Part 2](https://www.etany.org/not-so-capital-plan-the-future-is-electric): the MTA's 2025-29 Capital Plan, on subway rolling stock cost explosion and on commuter rail electrification.

- [If It Can't Stand the Heat, You Need to Upgrade the Kitchen](https://www.etany.org/repairing-northeast-corridor-electrical-system): repairing the Northeast Corridor's electrical systems.

- [Deinterlining](https://www.etany.org/statements/deinterlining): simpler service, fewer delays.

- [Baffling Battery Blunder](https://www.etany.org/baffling-battery-blunder): expensive, experimental, slow battery locomotives have no place on already electrified rails.

- Videos: [The Century Old Idea that Can Revolutionize NYC Commuter Rail](https://www.youtube.com/watch?v=l0xR6V-GIzc) and [Did NYC's Newest Subway Just Get Better?](https://www.youtube.com/watch?v=5FgyHCl6E3A)



## **Communications Associate (previously Volunteer)**, QueensLink -- Queens, NY

Mar 2024 – present

- [thequeenslink.org/the-plan](https://thequeenslink.org/the-plan/)

- Advocate for QueensLink, a proposal to convert the abandoned Rockaway Beach Branch rail line through central Queens into a dual-use subway extension and linear park.



## **Software Engineer (previously Junior Software Engineer, Intern)**, Immunant -- Remote

May 2022 – Apr 2026

- Core developer of c2rust, a C to Rust transpiler, as part of the DARPA ALLSTAR and TRACTOR programs, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

- Greatly strengthened testing, adding snapshot tests for the transpiler, reviving c2rust-refactor and dynamic analysis, and extending the integration test suite of various codebases.

- Ported the bulk of the AV1 decoder dav1d from C to Rust, now named rav1d, translating complex C idioms while preserving performance, and extensively optimizing the result, including instrumenting and modifying rustc where it differed from C. The result is just 5% slower than C's dav1d, 3.8% of which comes from the initial unsafe transpile.



## **Compiler Intern**, MediaTek -- Woburn, MA

May 2020 – Dec 2021

- Little Doctor: Built the Little Doctor, a framework for testing the compiler's debug info's quality using gdb's Python API, which already discovered hundreds of bugs in 2 months.

- Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.



## **Teaching Assistant, Analysis of Algorithms (taught by Prof. Clifford Stein)**, Columbia University

Sept 2019 – Jan 2020



## **Rabi Scholar Researcher (Smart Neural Fuzzer Internship)**, Columbia University

Jan 2019 – Aug 2019

- [github.com/kkysen/SmartNeuralFuzzer](https://github.com/kkysen/SmartNeuralFuzzer)

- Built an LLVM pass recording every branch decision of multi-threaded, multi-process programs, enabling record-replay debugging of control flow and guiding a neural net-based fuzzer.



# Transit Projects
## **[MTA OD Data](https://github.com/kkysen/mta-od-data) (Python)**

Aug 2026 – present

- Analyzed MTA's public subway origin-destination ridership data to quantify, for proposed deinterlining scenarios, the share of one-seat rides lost and how many of those riders would still be a short walk from the other trunk.



## **[Rail Runtime](https://github.com/kkysen/rail-runtime) (Python)**

Oct 2026 – present

- Computed minimum train runtimes from track geometry and train performance, and compared them with scheduled timetables for LIRR services into Penn Station, Grand Central Madison, and Atlantic Terminal.



## **[Subway Sheds](https://github.com/kkysen/subway-sheds) (Python, R5)**

Oct 2026 – present

- Mapped how far you can get on the NYC subway in a given time, with and without QueensLink, routed with R5 over the real street network and counting waits for trains.



## **[Ride Logger](https://github.com/kkysen/ride-measurement-app) (Rust, Android, Python)**

Oct 2026 – present

- Built an Android app recording rides (trains, buses, planes) from phone sensors without ever losing data, with a Rust session format, CLI, and Python bindings for analysis.



## **[ETA Publish](https://github.com/effective-transit-alliance/eta-publish) (Python)**

Aug 2026 – present

- Built ETA's tool converting report Google Docs into publish-ready HTML, Markdown, and PDF, replacing a manual, error-prone hand-off to Squarespace.



# Projects
## **[N Queens](https://github.com/kkysen/MKS22X/blob/master/02NQueens/NQueens.java) (Java)**

- Developed a novel, extremely efficient bitwise solution to the classic N Queens problem faster than any other known software solution.



## **[Flight Delay Visualizer](https://github.com/kkysen/r3d3) (TypeScript, WebAssembly (C++17), d3)**

- Designed an interactive website to visualize all 6 million flights over the US in the past year, watching how certain airlines and airports are chronically delayed, and applying complex filters to the flights. Used C++ compiled to WebAssembly to make it feasible performance- and memory-wise.



## **[Weather or Not at Stuy Hacks](https://github.com/wertylop5/WeatherOrNot) (JS)**

- Led a 4-person team in 24 hours, ~200-person Major League Hackathon. My team created a website that overlays maps, traffic, weather, and more to better plan your trip.



# Skills
**Transit Data:** GTFS, GTFS-RT, transit open datasets, Python/pandas analysis, GeoJSON, passenger crowding modeling

**Languages:** Rust, C, C++, Python, TypeScript, Kotlin, Java, x86 asm, Bash

# Honors
- 1st Place, Two Sigma Data Science Competition

- 1st Place, PClassic Programming Competition at UPenn

# Interests
**Interests:** Programming Language Design, Tennis, Baseball, Quantum Mechanics, Endocrinology, Optimization, Trains
