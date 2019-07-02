import * as React from "react";
import {makeProject} from "./Project";

export const r3d3 = makeProject({
    data: {
        user: "kkysen",
        repo: "r3d3",
        brief: "TODO",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            TODO
        </div>;
    },
});
