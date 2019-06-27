import * as React from "react";
import {FC} from "react";
import {ProjectData} from "./ProjectData";
import {ProjectHeader} from "./ProjectHeader";

export const Project: FC<{data: ProjectData}> = ({data, children}) => {
    return <div>
        <ProjectHeader data={data}/>
        {children}
    </div>;
};
