import * as React from "react";
import {makeProject} from "./Project";

export const WeatherOrNot = makeProject({
    data: {
        user: "wertylop5",
        repo: "WeatherOrNot",
        name: "Weather or Not",
        brief: "Traffic and weather - to plan your trip better.",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            <br/>
            <br/>
            Have you ever been looking for driving directions on Google Maps
            but then realized you didn't want to drive through the pouring rain?
            If you have, then Weather Or Not is perfect for you.
            It overlays real-time weather maps (and other types of maps) onto a traffic map
            so that you can have the best of both worlds.
            And it even supports adding comments on current conditions
            to improve the weather and traffic conditions just like Waze.
            <br/>
            <br/>
            Weather Or Not was created during the StuyHacks hackathon in May, 2017
            over the course of 24 hours, developed by me, Stanley Lin, Brian Yang, and Aaron Gee.
            <br/>
            <br/>
            Weather Or Not is a pure web app, using HTML, CSS, and plain JS
            along with APIs like OpenWeatherMap and Firebase for a serverless database.
            Currently, it only runs on localhost,
            but since it's serverless, it can easily be deployed on any domain.
            <br/>
            <br/>
        </div>;
    },
});
