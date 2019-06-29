import React, {FC} from "react";
import {me} from "./me";

export const Footer: FC = () => {
    return <footer>
        Email: {me.email}
    </footer>;
};
