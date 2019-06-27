import projectsJson from "../../../data/projects/projects.json";
import {parseProjects} from "./ProjectData";

export const projectsData = parseProjects(projectsJson);
