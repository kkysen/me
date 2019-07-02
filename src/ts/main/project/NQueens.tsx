import * as React from "react";
import {FC} from "react";
import animation from "../../../media/N Queens Animation.gif";
import solved from "../../../media/N Queens Solved.png";
import {makeProject} from "./Project";

const NQueensImage: FC<{description: string, src: string}> = ({description, src}) => {
    const fullDescription = `N Queens ${description}`;
    return <>
        {fullDescription}: <img src={src} alt={fullDescription}/>
    </>;
};

export const NQueens = makeProject({
    data: {
        user: "kkysen",
        repo: "MKS22X",
        name: "N Queens",
        file: "/blob/master/02NQueens/NQueens.java",
        brief: "A novel solution to a classic computer science problem.",
    },
    MainPage: ({data, Header}) => {
        return <div style={{margin: "10%"}}>
            <Header/>
            <br/>
            <br/>
            <NQueensImage description="solved for N = 8" src={solved}/>
            <br/>
            <br/>
            <NQueensImage description="animation for N = 8" src={animation}/>
            <br/>
            <br/>
            A bitwise solution to the N Queens problem written in Java.
            Source code at {data.url}.
            <video src="https://www.youtube.com/watch?v=b2ejXXoIQqI"/>
            <br/>
            <br/>
            Description
            <br/>
            <br/>
            Another one of my passions is re-examining the simple, classic problems of computer science to find
            new, novel solutions, which can often teach us valuable lessons and techniques
            that can potentially be applied elsewhere to outstanding effect.
            This was the case for my innovative solution to the N Queens problem,
            which is to count the number of N by N chess boards on which N queens can be placed
            such that no two queens are threatening each other.
            The straightforward way we learned to solve this in school was to create a 2D array as the board
            and recurse through the rows, placing a queen in the next open spot,
            and then filling in all the spots threatened by the new queen.
            Since the number of solutions grows exponentially,
            solving the N Queens problem for much higher N is currently impossible,
            but nevertheless, the simple way we solved it was extremely inefficient, slow, and memory-intensive.
            So I set about trying to find a more efficient way to approach the problem.
            <br/>
            The near-optimal solution I developed approached this problem in a fundamentally different way.
            Instead of representing the board as a 2D array, I represented the entire board
            and all the current threats in only three integers.
            I used the individual bits of the integers to represent
            the vertical, left diagonal, and right diagonal threats,
            allowing me to flip a bit to place a new queen
            and then bitshift the diagonals to create the next row.
            By taking advantage of extremely fast bit operations instead of slower loops,
            and by confining the memory to only three integers,
            I was able to run the program entirely on the tiny memory of the CPU
            instead of accessing comparatively slow RAM.
            The result was that my program was thousands of times faster and used dramatically less memory.
            Even when I searched online to see if there was a better solution,
            my program was 20% faster than Jeff Somers’, which purports to be the world’s fastest.
            <br/>
            <br/>
        </div>;
    },
});
