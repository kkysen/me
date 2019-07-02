import * as React from "react";
import {makeProject} from "./Project";

export const UFOTracker = makeProject({
    data: {
        user: "luojeff",
        repo: "aliens-revised",
        name: "UFO Tracker",
        brief: "Let's look for a UFO together.",
    },
    MainPage: ({Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            <br/>
            <br/>
            UFO Tracker is a data analysis project that analyzes UFO reports collected over the past since WWII.
            My team, Jeffrey Luo, Max Zlotskiy, Jason Kao, and I,
            tested if the number of UFO sightings was correlated with the number of nearby flights
            and even the number of flights flying directly overhead
            within a few miles of the sighting at the same time.
            Surprisingly, we found no correlation between UFO sightings and air traffic.
            <br/>
            <br/>
            UFO Tracker was the winner of the final project competition in
            Two Sigma's Data Science Workshop in Fall, 2017.
            Using Python in a Jupyter Notebook and making heavy use of pandas,
            we used the UFO reports compiled by the National UFO Reporting Center and available on Kaggle,
            in addition to flight data, including US aircraft carrier flights,
            from the Bureau of Transportation Statistics geocoded using the Google Geocoding API.
            <br/>
            <br/>
        </div>;
    },
});
