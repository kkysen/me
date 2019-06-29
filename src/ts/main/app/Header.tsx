import React, {FC} from "react";
import {pages} from "../page/pages";
import {me} from "./me";
import {NavBar} from "./NavBar";

export const Header: FC = () => {
    return <header>
        {me.name}
        <NavBar pages={pages.main}/>
    </header>;
};
