import {FC} from "react";
import {Baseball} from "./Baseball";
import {Home} from "./Home";
import {Internships} from "./Internships";
import {Projects} from "./Projects";
import {Resume} from "./Resume";
import {Writings} from "./Writings";

export const pages = {
    Home,
    Internships,
    Projects,
    Writings,
    Baseball,
    Resume,
};

export type Pages = {[name: string]: FC};
