import * as React from "react";
import {FC} from "react";
import {NQueens} from "../project/NQueens";
import {ProjectHeader} from "../project/ProjectHeader";
import {projectsData} from "../project/projectsData";

export const Projects: FC = () => {
    return <div>
        {Object.values(projectsData)
            .map(project => <ProjectHeader data={project} key={project.url}/>)}
        <NQueens.Preview/>
    </div>;
};
