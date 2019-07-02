import * as React from "react";
import {makeProject} from "./Project";

export const SmartNeuralFuzzer = makeProject({
    data: {
        user: "kkysen",
        repo: "SmartNeuralFuzzer",
        brief: "TODO",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            TODO
        </div>;
    },
});
