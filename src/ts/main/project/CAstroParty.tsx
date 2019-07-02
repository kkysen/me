import * as React from "react";
import {makeProject} from "./Project";

export const CAstroParty = makeProject({
    data: {
        user: "kkysen",
        repo: "CAstroParty",
        name: "CAstro Party",
        brief: "TODO",
    },
    MainPage: ({Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            TODO
        </div>;
    },
});
