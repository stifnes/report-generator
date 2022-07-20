import React from "react";
import { useSelector } from "react-redux";
import { getSelectedProjectName } from "../../features/projects/projectSlice";
import { getAllGateways, getSelectedGatewayName } from "../../features/gateways/gatewaySlice";
import { getReport } from "../../features/reports/reportSlice";

import ProjectCard from "./ProjectDataTable";
import NoReports from "../Reports/NoReports";
import styles from "./ProjectListing.module.scss";
import Chart from '../Chart'

const ProjectListing = () => {
  const allGateways = useSelector(getAllGateways);
  const selectedProjectName = useSelector(getSelectedProjectName);
  const selectedGatewayName = useSelector(getSelectedGatewayName);
  const reportData = useSelector(getReport);
  let renderProjects = [];
  let totalAmount = 0

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
  reportData.map(report => {
    return totalAmount += report.amount
  })

  const gatewayMap  = new Map();

  for(let i = 0; i < allGateways.length; i++) {
     let {name, gatewayId} = allGateways[i];
     gatewayMap.set(gatewayId, name);
  }
  console.log('gatwayMap',gatewayMap)

  reportsMap.forEach((value, key) => {
    value.gatewayName = gatewayMap.get(value.gatewayId)
    console.log('gatwayName',value.gatewayId)
    renderProjects.push(<ProjectCard projectId={key} data={value} gatewayMap={gatewayMap}/>);
  });

  const showProjects = renderProjects.length > 0;

  return showProjects ? (
    <div style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr'}}>
      <div>
        <div className={styles.listing}>
          <h3>
            {selectedProjectName} | {selectedGatewayName}
          </h3>
          {renderProjects}
        </div>
        <div className={styles.listing}>
          <h2>Total: {totalAmount.toFixed(2)} USD</h2>
        </div>
      </div>
      <Chart/>
    </div>
  ) : (
    <div>
      <NoReports />
    </div>
  );
};

export default ProjectListing;
