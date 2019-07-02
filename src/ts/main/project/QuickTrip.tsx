import * as React from "react";
import {makeProject} from "./Project";

export const QuickTrip = makeProject({
    data: {
        user: "kkysen",
        repo: "QuickTrip",
        brief: "How to get there fast and cheap.",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            <br/>
            <br/>
            QuickTrip is the ultimate travel planner.
            All you have to do is give it a list of destinations you want to visit
            and how long and it will plan your entire trip for you.
            It will decide the best order of destinations to go to,
            as well as find the cheapest, highest-rated flights and hotels for you to stay in,
            and even driving directions between everything.
            <br/>
            <br/>
            QuickTrip was developed by Stanley Lin and I for
            our AP Computer Science Fall Final Project in Fall, 2016.
            <br/>
            <br/>
            QuickTrip is written in Java 8 using JavaFX
            and uses many APIs to fetch flight, hotel, and geocoding data,
            including Google Maps API, Google Maps Directions API, Google Geocoding API,
            Google QPX Express API, and hotels.com.
            It utilizes a caching mechanism for all API requests
            to avoid going over API rate limits for duplicated requests,
            the DBSCAN clustering algorithm to find the optimal, clustered destination order,
            and simulated annealing to find the highest-rated but still cheapest hotels and flights.
            <br/>
            <br/>
        </div>;
    },
});
