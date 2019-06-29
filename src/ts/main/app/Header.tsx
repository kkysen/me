import React, {FC} from "react";
import {pages} from "../page/pages";
import {NavBar} from "./NavBar";

export const Header: FC = () => {
    return <header>
        Khyber Sen
        <NavBar pages={pages}/>
    </header>;
};
