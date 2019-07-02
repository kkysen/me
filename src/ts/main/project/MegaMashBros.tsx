import * as React from "react";
import {makeProject} from "./Project";

export const MegaMashBros = makeProject({
    data: {
        user: "kkysen",
        repo: "MegaMashBros",
        brief: "A play on the classic game.",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            <br/>
            <br/>
            Mega Mash Bros is a clone of Super Smash Bros,
            developed using libGDX and Java 8 by Stanley Lin and I
            for our AP Computer Science Spring Final Project in Spring, 2017.
            <br/>
            <br/>
        </div>;
    },
});
