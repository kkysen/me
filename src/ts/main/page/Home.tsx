import * as React from "react";
import {FC} from "react";
import seniorPortrait from "../../../media/Senior Portrait.jpg"
import {me} from "../app/me";

export const Home: FC = () => {
    return <>
        Home
        <br/>
        <img src={seniorPortrait} alt={`${me.name}`} width="25%" height="25%"/>
    </>;
};
