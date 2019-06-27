import * as React from "react";
import {FC} from "react";
import {ProjectData} from "./ProjectData";

export const ProjectHeader: FC<{data: ProjectData}> = ({data}) => {
    const {name, brief, url} = data;
    return <div>
        Name: {name}
        <br/>
        {brief}
        <br/>
        See source code: <a href={url}>{url}</a>
        <br/>
    </div>;
};
