import React from "react";
import { useSelector } from "react-redux";
import {
  getAllProjects,
  getSelectedProjects,
} from "../../features/projects/projectSlice";
import { getSelectedGateway } from "../../features/gateways/gatewaySlice";
import { getReport } from "../../features/reports/reportSlice";

import ProjectCard from "./ProjectCard";
import NoReports from '../Reports/NoReports'
import styles from './ProjectListing.module.scss'

const ProjectListing = () => {
  const projects = useSelector(getAllProjects);
  // const selectedProject = useSelector(getSelectedProjects);
  // const selectedGateway = useSelector(getSelectedGateway);
  const reportData = useSelector(getReport);
  let renderProjects = [];
  let filteredProjects = "";
  // let gatewayFilteredProjects = "";

  // filteredProjects = selectedReport.filter((project) => project.projectId === selectedProject)
  // gatewayFilteredProjects = selectedGateway !== "gateways"
  //     ? filteredProjects.filter((project) => project.gatewayIds.includes(selectedGateway))
  //     : filteredProjects;

  // renderProjects = reportData.map((project) => {
  //   return <ProjectCard key={project.paymentId} data={project} />;
  // });
  const reportsMap = new Map();
  for (let i = 0; i < reportData.length; i++) {
    if (reportsMap.has(reportData[i].projectId)) {
      let values = reportsMap.get(reportData[i].projectId);
      values.push(reportData[i]);
      reportsMap.set(reportData[i].projectId, values);
    } else {
      reportsMap.set(reportData[i].projectId, [reportData[i]]);
    }
  }

  reportsMap.forEach((value, key) => {
    renderProjects.push(<ProjectCard projectId={key} data={value} />);
  });
  const showProjects = renderProjects.length > 0;

  return showProjects ? <div className={styles.listing}>{renderProjects}</div> : <div><NoReports/></div>;
};

export default ProjectListing;
 