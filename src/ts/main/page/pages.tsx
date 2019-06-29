import {FC} from "react";
import {DietrichLab} from "../internship/DietrichLab";
import {FruitFlyBrainObservatory} from "../internship/FruitFlyBrainObservatory";
import {Baseball} from "./Baseball";
import {Home} from "./Home";
import {Internships} from "./Internships";
import {Projects} from "./Projects";
import {Resume} from "./Resume";
import {Writings} from "./Writings";

const mainPages = {
    Home,
    Internships,
    Projects,
    Writing: Writings,
    Baseball,
    Resume,
} as const;

const subPages = {
    ...FruitFlyBrainObservatory.pages,
    ...DietrichLab.pages,
} as const;

export const pages = {
    main: mainPages,
    sub: subPages,
    all: {
        ...mainPages,
        ...subPages,
    },
} as const;

export type Pages = {readonly [name: string]: FC};
