# Khyber Sen's Resume

- Phone: +1 917 648 8677
- Email: [kkysen@gmail.com](mailto:kkysen@gmail.com)
- Location: NYC
- GitHub: [kkysen](https://github.com/kkysen)
- LinkedIn: [khyber-sen](https://linkedin.com/in/khyber-sen)


# Systems Software Engineer, Transit Advocate
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

  - [No Need to Wait: Automated Light Metro is Right for the IBX](https://www.etany.org/reports/ibx-automation) (Project Manager): now that the IBX will be fully grade-separated, it should be built as an automated light metro.

- 125 St Subway

  - [Digging Out of a Very Deep Hole: Saving Billions on 125th Street](https://www.etany.org/reports/digging-out-deep-hole-sas-west) (Project Manager): how to build shallower stations that save riders up to 10 min per trip and the MTA billions by using the latest in subway construction techniques.

  - [Did NYC's Newest Subway Just Get Better?](https://www.youtube.com/watch?v=5FgyHCl6E3A): interviewed for a JTA video on the 125 St subway.

- Better Subway Service

  - [Impeding Progress, Costing Riders: Bill Banning One-Person Trains Would Lock NY Transit in the Past](https://www.etany.org/statements/impeding-progress-costing-riders-opto): helped convince Governor Hochul to veto a 2025 bill that would have banned one-person train operation, preventing New York's transit system from being locked out of future modernization.

  - [Deinterlining: Simpler Service, Fewer Delays](https://www.etany.org/statements/deinterlining)

- Penn Station Through-Running

  - [Penn Station Can Handle the Load: New York is Ready for Through-Running](https://www.etany.org/penn-station-can-handle-the-load): rebuilt the passenger crowding model to show Penn Station can safely support 48 tph.

  - [Through-Running: First Connections](https://www.etany.org/reports/through-running-first-connections): a phased plan for through-running at Penn Station, using Metro-North's Penn Station Access as a launching pad.

  - [The Century Old Idea that Can Revolutionize NYC Commuter Rail](https://www.youtube.com/watch?v=l0xR6V-GIzc): interviewed for a JTA video.



## **Board Member**, [Joint Transit Association](https://jointtransit.org/) (JTA) -- NYC

May 2026 – present



## **Communications Associate**, [QueensLink](https://thequeenslink.org/) -- NYC

Mar 2024 – present

- Advocating for QueensLink, a proposal to convert the abandoned Rockaway Beach Branch rail line through central Queens into a dual-use subway extension and linear park.



## **Software Engineer**, [Immunant](https://immunant.com/) -- Remote

May 2022 – Apr 2026

- [c2rust](https://github.com/immunant/c2rust): Core developer of c2rust, a C to Rust transpiler, as part of the DARPA ALLSTAR and TRACTOR programs, helping to lift the unsafe Rust output to safe Rust through a combination of static and dynamic analysis.

- [rav1d](https://github.com/memorysafety/rav1d): Ported the bulk of the AV1 decoder dav1d from C to Rust, translating complex C idioms while preserving performance, and extensively optimizing the result, including instrumenting and modifying rustc where it differed from C. The result is just 5% slower than C's dav1d, 3.8% of which comes from the initial unsafe transpile.



## **Compiler Intern**, MediaTek -- Woburn, MA

May 2020 – Dec 2021

- Little Doctor: Built the Little Doctor, a framework for testing the compiler's debug info's quality using gdb's Python API, which already discovered hundreds of bugs in 2 months.

- Louper: Helped optimize MediaTek's LLVM-based digital signal processing compiler by using deep learning to predict difficult optimization decisions. Developed the hyperheuristic framework Louper, which created a register pressure estimator 3x as accurate as the current human heuristic.



## **Teaching Assistant**, Analysis of Algorithms (Prof. Clifford Stein), Columbia University

Sept 2019 – Jan 2020



## **Rabi Scholar Researcher**, Columbia University ([SmartNeuralFuzzer](https://github.com/kkysen/SmartNeuralFuzzer))

Jan 2019 – Aug 2019

- Built an LLVM pass recording every branch decision of multi-threaded, multi-process programs, enabling record-replay debugging of control flow and feeding a neural net that guides fuzzing, taint analysis, and profile-guided optimizations, uncovering hidden data dependencies and elusive bugs.



# Recent Transit Projects
## **[MTA OD Data](https://github.com/kkysen/mta-od-data) (Python, Rust)**

- Analyzed origin-destination data to quantify how many one-seat rides are lost under different deinterlining scenarios.

- Used RAPTOR to turn origin-destination data into trip paths to analyze ridership and crowding across lines, train cars, stations, and platforms.



## **[Rail Runtime](https://github.com/kkysen/rail-runtime) (Python, Rust)**

- Computed minimum train runtimes from track geometry, train performance, and traction power limitations, and compared them with scheduled runtimes.

- Identified schedule padding hotspots and bottlenecks in signaling, junctions, and traction power.



## **[Subway Sheds](https://kkysen.github.io/subway-sheds/) (Python, TypeScript, R5)**

- Mapped NYC subway isochrones, with and without QueensLink, routed with R5 over the real street network.



## **[Ride Logger](https://github.com/kkysen/ride-measurement-app) (Rust, Kotlin, Python, Android)**

- Built an app to record rides and use sensor fusion (GNSS, IMU, cell, Wi-Fi, Bluetooth beacons, magnetometer, pedometer, microphone) to estimate speed and position underground, on trains and in stations.



## **[ETA Publish](https://github.com/effective-transit-alliance/eta-publish) (Python, Typst)**

- Built ETA's automated tool to publish report Google Docs, replacing a manual, error-prone upload to Squarespace.



# Skills
**Transit Data:** OpenStreetMap, GTFS, GTFS-RT, GTFS Pathways, SIRI, RAPTOR, NFPA 130, GeoJSON, passenger crowding modeling

**Languages:** Rust, C, C++, Python, TypeScript, Kotlin, Java, Haskell, OCaml, x86_64 and AArch64 asm, SQL, Bash

# Interests
Programming language design, tennis, baseball, quantum mechanics, endocrinology, optimization, exploring cities
