import React from "react";
import { useSelector } from "react-redux";
import {
  getAllProjects,
  getSelectedProjects,
} from "../features/projects/projectSlice";
import ProjectCard from "./ProjectCard";

const ProjectListing = () => {
  const projects = useSelector(getAllProjects);
  const selectedProject = useSelector(getSelectedProjects);
  let renderProjects = "";
  let filteredProjects = "";

  filteredProjects =
    selectedProject !== "projects"
      ? projects.filter((project) => project.projectId === selectedProject)
      : projects;
  renderProjects = filteredProjects.map((project) => {
    return <ProjectCard key={project.name} data={project} />;
  });
  return <div>{renderProjects}</div>;
};

export default ProjectListing;
