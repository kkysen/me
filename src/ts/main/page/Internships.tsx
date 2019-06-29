import * as React from "react";
import {FC} from "react";
import {DietrichLab} from "../internship/DietrichLab";
import {FruitFlyBrainObservatory} from "../internship/FruitFlyBrainObservatory";
import {SmartNeuralFuzzer} from "../internship/SmartNeuralFuzzer";

export const Internships: FC = () => {
    return <>
        Internships
        <br/>
        <SmartNeuralFuzzer/>
        <br/>
        <FruitFlyBrainObservatory/>
        <br/>
        <DietrichLab/>
    </>;
};
