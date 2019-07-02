import * as React from "react";
import {FC} from "react";
import {Pages, PageTree} from "../page/pages";
import {CAstroParty} from "./CAstroParty";
import {MegaMashBros} from "./MegaMashBros";
import {NQueens} from "./NQueens";
import {Polybius} from "./Polybius";
import {Project} from "./Project";
import {ProjectScheduleViewer} from "./ProjectScheduleViewer";
import {QuickTrip} from "./QuickTrip";
import {r3d3} from "./r3d3";
import {Scramble} from "./Scramble";
import {ScratchWasmRenderer} from "./ScratchWasmRenderer";
import {SmartNeuralFuzzer} from "./SmartNeuralFuzzer";
import {ThisWebsite} from "./ThisWebsite";
import {UFOTracker} from "./UFOTracker";
import {WeatherOrNot} from "./WeatherOrNot";
import {Welp} from "./Welp";

interface Projects {
    readonly Previews: FC;
    readonly pages: Pages;
    readonly pageTree: PageTree;
}

const projects: readonly Project[] = [
    ThisWebsite,
    SmartNeuralFuzzer,
    ScratchWasmRenderer,
    NQueens,
    ProjectScheduleViewer,
    r3d3,
    Scramble,
    WeatherOrNot,
    UFOTracker,
    Polybius,
    CAstroParty,
    MegaMashBros,
    Welp,
    QuickTrip,
];

export const Projects: Projects = {
    Previews: () => {
        return <div>
            {projects.map(e => <e.Preview key={e.uuid}/>)}
        </div>;
    },
    pages: Object.assign({}, ...projects.map(e => e.pages)),
    pageTree: {
        title: "Projects",
        Page: () => {
            return <div>
                {projects.map(e => <e.Preview key={e.uuid}/>)}
            </div>;
        },
        children: Object.assign({}, ...projects.map(e => e.pageTreeChildren)),
    },
};
