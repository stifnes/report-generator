import React from "react";
import { useSelector } from "react-redux";
import { getAllProjects } from "../../features/projects/projectSlice";
import styles from "./ProjectDataTable.module.scss";

const ProjectDataTable = (props) => {
  const projects = useSelector(getAllProjects);
  const { projectId, data, gatewayMap } = props;
  let projectName = "";
  let projectDetails = "";
  let amount = 0;
  let sortedProjects = [];

  projects.forEach(function (project) {
    if (projectId === project.projectId) {
      projectName = project.name;
    }
  });

  sortedProjects = data.sort((projectA, projectB) => {
    return Date.parse(projectA.created) - Date.parse(projectB.created);
  });

  projectDetails = sortedProjects.map((value) => {
    amount += value.amount;
    let date = new Date(value.created);
    return (
      <tr key={value.amount}>
        <td>{date.toLocaleDateString("en-GB").replace(/\//g, ".")}</td>
        <td>{gatewayMap.get(value.gatewayId)}</td>
        <td>{value.paymentId}</td>
        <td>{value.amount}</td>
      </tr>
    );
  });

  return (
    <details className={styles.card}>
      <summary className={styles.projectHeader}>
        <h2>{projectName}</h2>
        <h2 className="amount">Total: {amount.toFixed(2)} USD</h2>
      </summary>
      <table className={styles.projectDetailTable}>
        <thead>
          <tr>
            <td>Date</td>
            <td>Gateways</td>
            <td>Transaction ID</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>{projectDetails}</tbody>
      </table>
    </details>
  );
};

export default ProjectDataTable;
