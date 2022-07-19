import React from "react";
import { useSelector } from "react-redux";
import {
  getAllProjects,
  getSelectedProjects,
} from "../features/projects/projectSlice";
import { getSelectedGateway } from '../features/gateways/gatewaySlice'
import {getReport} from '../features/reports/reportSlice'

import ProjectCard from "./ProjectCard";

const ProjectListing = () => {
  // const projects = useSelector(getAllProjects);
  const selectedProject = useSelector(getSelectedProjects);
  // const selectedGateway = useSelector(getSelectedGateway);
  const selectedReport = useSelector(getReport);
  let renderProjects = "";
  let filteredProjects = "";
  // let gatewayFilteredProjects = "";

  // filteredProjects = selectedReport.filter((project) => project.projectId === selectedProject)
  // gatewayFilteredProjects = selectedGateway !== "gateways"
  //     ? filteredProjects.filter((project) => project.gatewayIds.includes(selectedGateway))
  //     : filteredProjects;

  renderProjects = selectedReport.map((project) => {
    return <ProjectCard key={project.paymentId} data={project} />;
  });
  console.log(renderProjects);
  return <div>{renderProjects}</div>;
};

export default ProjectListing;
