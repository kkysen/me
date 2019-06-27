interface ProjectJson {
    readonly brief: string;
    readonly description: string;
    readonly name?: string;
    readonly file?: string;
}

interface ProjectsJson {
    readonly [gitHubUser: string]: {
        readonly [repoName: string]: ProjectJson;
    };
}

export interface Project {
    readonly name: string;
    readonly gitHubUser: string;
    readonly repoName: string;
    readonly url: string;
    readonly brief: string;
    readonly description: string;
}

function parseProject(gitHubUser: string, repoName: string, json: ProjectJson): Project {
    const {brief, description, name, file} = json;
    return {
        name: name || repoName,
        gitHubUser,
        repoName,
        url: `https://github.com/${gitHubUser}/${repoName}${file || ""}`,
        brief,
        description,
    };
}

export function parseProjects(json: ProjectsJson): readonly Project[] {
    return Object.entries(json)
        .flatMap(([gitHubUser, repos]) => Object.entries(repos)
            .map(([repoName, project]) => parseProject(gitHubUser, repoName, project))
        );
}
