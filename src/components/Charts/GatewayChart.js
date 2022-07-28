import React from "react";
import { useSelector } from "react-redux";
import { getAllProjects } from "../../features/projects/projectSlice";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./GatewayChart.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const GatewayChart = (props) => {
  const projectNames = [];
  const projectColors = ["#6497B1", "#FFC107", "#F24E1E", "#A259FF"];
  let projectAmounts = 0;
  const amountsMap = new Map();
  const allProjects = useSelector(getAllProjects);
  const { chartData, filteredProjects } = props;

  allProjects.forEach(function (project) {
    filteredProjects.forEach(function (data) {
      if (data === project.projectId) {
        projectNames.push(project.name);
      }
    });
  });

  chartData.map((data) => {
    if (amountsMap.has(data.projectId)) {
      amountsMap.set(
        data.projectId,
        amountsMap.get(data.projectId) + data.amount
      );
    } else {
      amountsMap.set(data.projectId, data.amount);
    }

    return (projectAmounts += data.amount);
  });

  const data = {
    labels: projectNames,
    datasets: [
      {
        label: "",
        data: Array.from(amountsMap.values()),
        backgroundColor: projectColors.slice(0, projectNames.length),
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className={styles.gatewayChartWrapper}>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </div>
      <div className={styles.totalAmountContainer}>
        <h2 className="amount">Gateway Total: {projectAmounts.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default GatewayChart;
