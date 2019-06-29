import * as React from "react";
import {FC} from "react";
import {DietrichLabAbstractAndRole} from "./DietrichLabAbstractAndRole";

export const DietrichLab: FC = () => {
    return <>
        Dietrich Lab
        
        {/*should be a link*/}
        <DietrichLabAbstractAndRole/>
        <br/>
        <a href="http://www.dietrichlab.com/multicellularity.html">Click here for project abstract.</a>
        <br/>
        <a href="http://www.dietrichlab.com/">Click here for project website.</a>
    </>;
};
