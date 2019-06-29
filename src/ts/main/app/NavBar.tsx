import React, {FC} from "react";
import {Link} from "react-router-dom";
import {pages, Pages} from "../page/pages";

export const NavBar: FC<{pages: Pages}> = () => {
    return <>
        {Object.keys(pages)
            .map(name => <Link to={`/${name}`} key={name}>
                <button>{name}</button>
            </Link>)}
    </>;
};
