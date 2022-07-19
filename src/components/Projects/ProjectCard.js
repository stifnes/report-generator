import React from "react";
import { useSelector } from "react-redux";
import {
  getAllProjects,
  getSelectedProjects,
} from "../../features/projects/projectSlice";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  console.log("card props", props);
  const projects = useSelector(getAllProjects);
  const { projectId, data } = props;
  let projectName = "";
  let projectDetails = "";

  console.log("card props", data);

  projects.forEach(function (project) {
    console.log("key", projectId, "project id", project.projectId);
    if (projectId === project.projectId) {
      projectName = project.name;
    }
  });

  projectDetails = data.map((value) => {
    return (

        <div className={styles.projectDetail}>
          <h3>{value.created}</h3>
          <h3>{value.gatewayId}</h3>
          <h3>{value.paymentId}</h3>
          <h3>{value.amount}</h3>
        </div>
    );
  });
  console.log("project name:", projectName);
  return (
    <details className={styles.card}>
      <summary className={styles.projectHeader}>
        <h2>{projectName}</h2>
        <h2>Total: {projectName} USD</h2>
      </summary>
        <div className={styles.projectDetail}>
          <h3>Date</h3>
          <h3>Gateways</h3>
          <h3>Transaction ID</h3>
          <h3>Amount</h3>
        </div>
      {projectDetails}
    </details>
  );
};

export default ProjectCard;
