import * as React from "react";
import {FC} from "react";
import {Link} from "react-router-dom";
import {separateCamelCase} from "../../util/variableNames";
import {Title} from "../app/Title";
import {Pages} from "../page/pages";

export interface Project {
    readonly uuid: string;
    readonly Preview: FC;
    readonly Main: FC;
    readonly pages: Pages;
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
    readonly name: string;
    readonly gitHubUser: string;
    readonly repoName: string;
    readonly url: string;
    readonly brief: string;
}

function convertData(args: DataArgs): Data {
    const {user: gitHubUser, repo: repoName, brief, name, camelCase = true, file} = args;
    return {
        name: name || (camelCase ? separateCamelCase : (s: string) => s)(repoName),
        gitHubUser,
        repoName,
        url: `https://github.com/${gitHubUser}/${repoName}${file || ""}`,
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
    const uuid = `${data.gitHubUser}/${data.repoName}`;
    const link = `Project/${uuid}`;
    
    const Preview: FC<{link: boolean}> = ({link}) => {
        const {name, brief, url} = data;
        return <div>
            Name: {name}
            <br/>
            {brief}
            <br/>
            {link && <Link to={`/${link}`}>Read more</Link>}
            <br/>
            See source code: <a href={url}>{url}</a>
            <br/>
        </div>;
    };
    
    const Main: FC = () => {
        return <Title title={data.name}>
            <MainPage data={data} Header={() => <Preview link={false}/>}/>
        </Title>;
    };
    
    return {
        uuid,
        Preview: () => <Preview link={true}/>,
        Main,
        pages: {
            [link]: Main,
        },
    };
}
