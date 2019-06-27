import projectsJson from "../../../data/projects/projects.json"
import {parseProjects} from "./Project";

export const projects = parseProjects(projectsJson);
