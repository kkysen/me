import React, {FC} from "react";
import {Link} from "react-router-dom";
import {Pages} from "../page/pages";

export const NavBar: FC<{pages: Pages}> = ({pages}) => {
    return <>
        {Object.keys(pages)
            .map(name =>
                <Link to={`/${name}`} key={name}>
                    <button>{name}</button>
                </Link>)}
    </>;
};
