import * as React from "react";
import {makeProject} from "./Project";

export const Scramble = makeProject({
    data: {
        user: "kkysen",
        repo: "Scramble",
        brief: "A challenging word game for your spare time.",
    },
    MainPage: ({Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            <br/>
            <br/>
            My dad has always loved word puzzles, so I created one for him for his birthday: Scramble.
            In Scramble, there is a pyramid of letters shown,
            and the goal is to rearrange all the letters (by clicking on two)
            such that each row of the pyramid makes its own word.
            You can play from size 1 to 20, because at 20 there are very few 20-letter words left.
            <br/>
            <br/>
            Scramble is written using libGDX in Java 8,
            and although it is only currently setup to run on Java SE,
            it can be recompiled for deployment on the web, Android, and iOS.
            <br/>
            <br/>
            To play, click here and download Scramble.jar to your local drive.
            Once done, double-click to play.
            <br/>
            <br/>
        </div>;
    },
});
