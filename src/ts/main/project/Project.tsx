import * as React from "react";
import {FC} from "react";
import {Link} from "react-router-dom";
import {Title} from "../app/Title";
import {Pages} from "../page/pages";
import {ProjectData} from "./ProjectData";

interface Project {
    readonly Preview: FC;
    readonly Main: FC;
    readonly pages: Pages;
}

interface Props {
    data: ProjectData;
    MainPage: FC<{data: ProjectData, Header: FC}>;
}

export function makeProject(props: Props): Project {
    const {data, MainPage} = props;
    const link = `Project/${data.repoName}}`;
    
    const Preview: FC = () => {
        const {name, brief, url} = data;
        return <div>
            Name: {name}
            <br/>
            {brief}
            <br/>
            <Link to={`/${link}`}>Read more</Link>
            <br/>
            See source code: <a href={url}>{url}</a>
            <br/>
        </div>;
    };
    
    const Main: FC = () => {
        return <Title title={data.name}>
            <MainPage data={data} Header={Preview}/>
        </Title>;
    };
    
    return {
        Preview,
        Main,
        pages: {
            [link]: Main,
        },
    };
}
