import React, {FC} from "react";
import {pageTree} from "../page/pages";
import {NavBarTree} from "../navbar/NavBar";

export const Header: FC = () => {
    return <header>
        <NavBarTree pages={pageTree}/>
    </header>;
};
