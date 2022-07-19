import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAsyncProjects,
  getSelectedProjects,
} from "../features/projects/projectSlice";
import {
  fetchAsyncGateways,
  getSelectedGateway,
} from "../features/gateways/gatewaySlice";

import {postReportData} from "../features/reports/reportSlice"
import ProjectListing from "./ProjectListing";
import FilterDropdown from "./ProjectFilterDropdown";
import GatewayFilterDropdown from "./GatewayFilterDropdown";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
        console.log(response);
        dispatch(postReportData(response.data.data));
      });
  };

  return (
    <div className="main">
      <div className="filters">
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
        <button onClick={generateReport}> Generate Report </button>
      </div>
      <ProjectListing />
    </div>
  );
};

export default Main;
