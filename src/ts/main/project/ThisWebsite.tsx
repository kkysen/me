import * as React from "react";
import {makeProject} from "./Project";

export const ThisWebsite = makeProject({
    data: {
        user: "kkysen",
        repo: "me",
        name: "This Website",
        brief: "This website.",
    },
    MainPage: ({Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            TODO
        </div>;
    },
});
