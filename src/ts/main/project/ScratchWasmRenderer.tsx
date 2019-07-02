import * as React from "react";
import {makeProject} from "./Project";

export const ScratchWasmRenderer = makeProject({
    data: {
        user: "kkysen",
        repo: "ScratchWasmRenderer",
        brief: "TODO",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            TODO
        </div>;
    },
});
