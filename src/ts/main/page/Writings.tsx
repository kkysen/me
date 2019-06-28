import * as React from "react";
import {FC} from "react";
import {writings} from "../writing/writings";

export const Writings: FC = () => {
    return <div>
        {writings.map(({docId, title, date, url}) => <div key={docId}>
            {title}
            <br/>
            {date.toLocaleDateString()}
            <br/>
            <a href={url}>Read it</a>
            <br/>
        </div>)}
    </div>;
};
