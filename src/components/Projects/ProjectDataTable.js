import React from "react";
import { useSelector } from "react-redux";
import { getAllProjects } from "../../features/projects/projectSlice";
import styles from "./ProjectDataTable.module.scss";

const ProjectDataTable = (props) => {
  const projects = useSelector(getAllProjects);
  const { projectId, data, gatewayMap } = props;
  let projectName = "";
  let projectDetails = "";

  projects.forEach(function (project) {
    if (projectId === project.projectId) {
      projectName = project.name;
    }
  });

  let amount = 0;
  projectDetails = data.map((value) => {
    amount += value.amount
    return (
      <div className={styles.projectDetail}>
        <h3>{value.created}</h3>
        <h3>{gatewayMap.get(value.gatewayId)}</h3>
        <h3>{value.paymentId}</h3>
        <h3>{value.amount}</h3>
      </div>
    );
  });

  return (
    <details className={styles.card}>
      <summary className={styles.projectHeader}>
        <h2>{projectName}</h2>
        <h2>Total: {amount.toFixed(2)} USD</h2>
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

export default ProjectDataTable;
