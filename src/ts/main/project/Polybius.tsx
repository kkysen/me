import * as React from "react";
import {makeProject} from "./Project";

export const Polybius = makeProject({
    data: {
        user: "kkysen",
        repo: "Polybius",
        brief: "TODO",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            TODO
        </div>;
    },
});
