import React from "react";
import { useSelector } from "react-redux";
import { getAllProjects } from "../features/projects/projectSlice";
import ProjectCard from "./ProjectCard";

const ProjectListing = () => {
  const projects = useSelector(getAllProjects);
  let renderProjects = "";

  renderProjects = projects.map((project, index) => {
    return <ProjectCard key={index} data={project} />;
  });
  return <div>
  {renderProjects}
  </div>;
};

export default ProjectListing;
