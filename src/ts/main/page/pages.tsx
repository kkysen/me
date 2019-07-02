import * as React from "react";
import {FC} from "react";
import {me} from "../app/me";
import {Title} from "../app/Title";
import {DietrichLab} from "../internship/DietrichLab";
import {FruitFlyBrainObservatory} from "../internship/FruitFlyBrainObservatory";
import {Projects} from "../project/Projects";
import {Baseball} from "./Baseball";
import {Home} from "./Home";
import {Internships} from "./Internships";
import {Resume} from "./Resume";
import {Writings} from "./Writings";

export interface PageTreeChildren {
    readonly [name: string]: PageTree;
}

export interface PageTree {
    readonly title: string;
    readonly Page?: FC<{path: string}>;
    readonly children?: PageTreeChildren;
}

interface ForEachPageArgs {
    Page: FC,
    path: string;
    names: readonly string[];
    title: string;
}

type ForEachPage = (args: ForEachPageArgs) => void;

function forEachPageRecursive(pages: PageTree, f: ForEachPage, path: string = "", names: string[] = []) {
    const {title, Page, children} = pages;
    if (Page) {
        f({
            Page: () => {
                return <Title title={title}><Page path={path}/></Title>;
            },
            path: path || "/",
            names,
            title,
        });
    }
    if (children) {
        Object.entries(children).forEach(([name, pages]) => {
            names.push(name);
            forEachPageRecursive(pages, f, `${path}/${name}`, names);
            names.pop();
        });
    }
}

export function forEachPage(pages: PageTree, f: ForEachPage) {
    forEachPageRecursive(pages, f);
}

const testPageTreeChildren: PageTreeChildren = {
    test1: {
        title: "Test 1",
        children: {
            test2: {
                title: "Test 2",
                Page: () => <p>Hello, World</p>,
                children: {
                    test3: {
                        title: "Test 3",
                        children: {
                            test4: {
                                title: "Test 4",
                                Page: () => <p>Hello, World again</p>
                            }
                        }
                    }
                }
            }
        }
    }
};

export const pageTree: PageTree = {
    title: me.name,
    Page: Home,
    children: {
        home: {
            title: "Home",
            Page: Home,
        },
        internships: {
            title: "Internships",
            Page: Internships,
            children: {
                ...FruitFlyBrainObservatory.pages,
                ...DietrichLab.pages,
                ...testPageTreeChildren,
            },
        },
        projects: Projects.pageTree,
        writing: {
            title: "Writing",
            Page: Writings,
            children: {
                // TODO
            },
        },
        baseball: {
            title: "Baseball",
            Page: Baseball,
        },
        resume: {
            title: "Resume",
            Page: Resume,
        },
    },
};
