import React from "react";
import { useSelector } from "react-redux";
import { getSelectedProjectName } from "../../features/projects/projectSlice";
import {
  getAllGateways,
  getSelectedGatewayName,
} from "../../features/gateways/gatewaySlice";
import { getReport } from "../../features/reports/reportSlice";

import ProjectDataTable from "./ProjectDataTable";
import NoReports from "../Common/NoReports";
import styles from "./ProjectListing.module.scss";
import GatewayChart from "../Charts/GatewayChart";

const ProjectListing = () => {
  const allGateways = useSelector(getAllGateways);
  const selectedProjectName = useSelector(getSelectedProjectName);
  const selectedGatewayName = useSelector(getSelectedGatewayName);
  const reportData = useSelector(getReport);
  const renderProjects = [];
  let totalAmount = 0;
  const projectIds = [];

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
  reportData.map((report) => {
    return (totalAmount += report.amount);
  });

  const gatewayMap = new Map();

  for (let i = 0; i < allGateways.length; i++) {
    let { name, gatewayId } = allGateways[i];
    gatewayMap.set(gatewayId, name);
  }

  reportsMap.forEach((value, key) => {
    projectIds.push(key);
    value.gatewayName = gatewayMap.get(value.gatewayId);
    renderProjects.push(
      <ProjectDataTable
        projectId={key}
        data={value}
        gatewayMap={gatewayMap}
        key={key}
      />
    );
  });

  const showProjects = renderProjects.length > 0;
  const showGatewayChart = !(selectedProjectName !== "All Projects" && selectedGatewayName !== "All Gateways");
  return showProjects ? (
    <div className={styles.listingContainer}>
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
      {showGatewayChart && (
        <GatewayChart
          filteredProjects={projectIds}
          chartData={reportData}
          totalAmount={totalAmount}
        />
      )}
    </div>
  ) : (
    <div>
      <NoReports />
    </div>
  );
};

export default ProjectListing;
