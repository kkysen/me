import {separateCamelCase} from "../../util/variableNames";

interface ProjectJson {
    readonly brief: string;
    readonly name?: string;
    readonly camelCase?: boolean;
    readonly file?: string;
}

interface ProjectsJson {
    readonly [gitHubUser: string]: {
        readonly [repoName: string]: ProjectJson;
    };
}

export interface ProjectData {
    readonly name: string;
    readonly gitHubUser: string;
    readonly repoName: string;
    readonly url: string;
    readonly brief: string;
}

function parseProject(gitHubUser: string, repoName: string, json: ProjectJson): ProjectData {
    const {brief, name, camelCase = true, file} = json;
    return {
        name: name || (camelCase ? separateCamelCase : (s: string) => s)(repoName),
        gitHubUser,
        repoName,
        url: `https://github.com/${gitHubUser}/${repoName}${file || ""}`,
        brief,
    };
}

export function parseProjects(json: ProjectsJson): {[repoName: string]: ProjectData} {
    return Object.fromEntries(
        Object.entries(json)
            .flatMap(([gitHubUser, repos]) => Object.entries(repos)
                .map(([repoName, project]) => parseProject(gitHubUser, repoName, project))
            )
            .map(project => [project.repoName, project])
    );
}
