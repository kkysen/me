import * as React from "react";
import {makeProject} from "./Project";

export const ProjectScheduleViewer = makeProject({
    data: {
        user: "kkysen",
        repo: "ProjectScheduleViewer",
        brief: "TODO",
    },
    MainPage: ({Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            TODO
        </div>;
    },
});
