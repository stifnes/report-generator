import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAsyncProjects,
  getSelectedProjects,
} from "../../features/projects/projectSlice";
import {
  fetchAsyncGateways,
  getSelectedGateway,
} from "../../features/gateways/gatewaySlice";

import {postReportData} from "../../features/reports/reportSlice"
import ProjectListing from "../Projects/ProjectListing";
import FilterDropdown from "../Filters/ProjectFilterDropdown";
import GatewayFilterDropdown from "../Filters/GatewayFilterDropdown";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./Main.module.scss"

const Main = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectedProject = useSelector(getSelectedProjects);
  const selectedGateway = useSelector(getSelectedGateway);
  useEffect(() => {
    dispatch(fetchAsyncGateways());
    dispatch(fetchAsyncProjects());
  }, [dispatch]);

  const generateReport = () => {
    console.log("Generating Report");
    const requestBody = {
      // "projectId": selectedProject,
      // "gatewayId": selectedGateway,
      "from": startDate.toLocaleDateString("en-CA"),
      "to": endDate.toLocaleDateString("en-CA"),
    };
    axios
      .post("http://178.63.13.157:8090/mock-api/api/report", requestBody)
      .then(function (response) {
        let data = response.data.data
        dispatch(postReportData(data));
      });
  };

  return (
    <div className={styles.main}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1>Reports</h1>
          <p>Easily generate a report of your transactions</p>
        </div>
         <div className={styles.filtersContainer}>
            <FilterDropdown />
            <GatewayFilterDropdown />
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
            />
            <button onClick={generateReport} className={styles.generateReportButton}> Generate Report </button>
        </div>
      </div>
      <div>
        <ProjectListing />
      </div>
    </div>
  );
};

export default Main;
