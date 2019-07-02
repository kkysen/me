import * as React from "react";
import {makeSimpleInternship} from "./SimpleInternship";
import bacillusSubtilis from "../../../media/Bacillus subtilis.jpg"

export const DietrichLab = makeSimpleInternship({
    name: "DietrichLab",
    time: "Summer 2015",
    url: {
        abstract: "http://www.dietrichlab.com/multicellularity.html",
        website: "http://www.dietrichlab.com",
    },
    img: {
        thumb: bacillusSubtilis,
        main: bacillusSubtilis,
    },
    AbstractAndRole: () => <>
        As an intern at Professor Dietrich’s Columbia lab in 2015, I studied the response of biofilms,
        multicellular colonies of bacteria, to oxygen deprivation.
        Because biofilms are much harder to kill and occasionally antibiotic resistant,
        Understanding their weaknesses is crucial to developing new antibacterial treatments.
        Since some infectious bacteria wrinkle to increase their oxygen exposure,
        I worked on developing the optimal substrate mix to grow robust, wrinkled colonies
        and then analyzing their chemical composition to understand the wrinkling response.
        I also ran many polymerase chain reactions to discover the metabolic
        and genetic pathways leading to this wrinkling adaptation.
    </>,
});
