import React from "react";
import { useSelector } from "react-redux";
import { getAllProjects } from "../features/projects/projectSlice";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GatewayChart = (props) => {
  let projectNames = [];
  let projectAmounts = 0;
  const allProjects = useSelector(getAllProjects);
  const { chartData, filteredProjects } = props;

  allProjects.forEach(function (project) {
    filteredProjects.forEach(function (data) {
      if (data === project.projectId) {
        projectNames.push(project.name);
      }
    });
  });

  chartData.map( (data) => {
    return projectAmounts += data.amount;
  });

  console.log(projectNames, projectAmounts)

  const data = {
    labels: projectNames,
    datasets: [
      {
        label: "# of Votes",
        data: [12,12,12,12],
        backgroundColor: ["#6497B1", "#FFC107", "#F24E1E", "#A259FF"],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
      <div> Total Amount: { projectAmounts}</div>
    </div>
  );
};

export default GatewayChart;
