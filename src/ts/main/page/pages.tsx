import {FC} from "react";
import {DietrichLab} from "../internship/DietrichLab";
import {FruitFlyBrainObservatory} from "../internship/FruitFlyBrainObservatory";
import {Projects} from "../project/Projects";
import {Baseball} from "./Baseball";
import {Home} from "./Home";
import {Internships} from "./Internships";
import {ProjectsPage} from "./ProjectsPage";
import {Resume} from "./Resume";
import {Writings} from "./Writings";

const mainPages = {
    Home,
    Internships,
    Projects: ProjectsPage,
    Writing: Writings,
    Baseball,
    Resume,
} as const;

const subPages = {
    ...FruitFlyBrainObservatory.pages,
    ...DietrichLab.pages,
    ...Projects.pages,
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
