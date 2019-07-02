import * as React from "react";
import {FC} from "react";
import {Link} from "react-router-dom";
import {separateCamelCase} from "../../util/variableNames";
import {PageTreeChildren} from "../page/pages";

export interface Project {
    readonly uuid: string;
    readonly Preview: FC<{path: string}>;
    readonly Main: FC;
    readonly pages: PageTreeChildren;
}

interface DataArgs {
    readonly user: string; // GitHub username
    readonly repo: string;
    readonly brief: string;
    readonly name?: string; // defaults to repo
    readonly camelCase?: boolean; // split up camel case repo name
    readonly file?: string;
}

interface Data {
    readonly uuid: string;
    readonly name: string;
    readonly gitHubUser: string;
    readonly repoName: string;
    readonly url: string;
    readonly brief: string;
}

function convertData(args: DataArgs): Data {
    const {user: gitHubUser, repo: repoName, brief, name, camelCase = true, file} = args;
    const uuid = `${gitHubUser}/${repoName}${file || ""}`;
    return {
        uuid,
        name: name || (camelCase ? separateCamelCase : (s: string) => s)(repoName),
        gitHubUser,
        repoName,
        url: `https://github.com/${uuid}`,
        brief,
    };
}

interface Props {
    data: DataArgs;
    MainPage: FC<{data: Data, Header: FC}>;
}

export function makeProject(props: Props): Project {
    const {data: dataArgs, MainPage} = props;
    const data = convertData(dataArgs);
    const {uuid} = data;
    
    const Preview: FC<{path?: string}> = ({path}) => {
        const {name, brief, url} = data;
        return <div>
            Name: {name}
            <br/>
            {brief}
            <br/>
            {path && <Link to={`${path}/${uuid}`}>Read more</Link>}
            <br/>
            See source code: <a href={url}>{url}</a>
            <br/>
        </div>;
    };
    
    const Main: FC = () => {
        return <MainPage data={data} Header={() => <Preview/>}/>;
    };
    
    return {
        uuid,
        Preview: ({path}) => <Preview path={path}/>,
        Main,
        pages: {
            [uuid]: {
                title: data.name,
                Page: Main,
            }
        },
    };
}
