import * as React from "react";
import {makeProject} from "./Project";

export const Welp = makeProject({
    data: {
        user: "tmoi29",
        repo: "tenaciousTurtles",
        name: "Welp",
        brief: "TODO",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            TODO
        </div>;
    },
});
