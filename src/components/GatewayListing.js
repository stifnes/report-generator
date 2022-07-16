import React from "react";
import { useSelector } from "react-redux";
import { getAllGateways } from "../features/gateways/gatewaySlice";
import ProjectCard from "./ProjectCard";

const GatewayListing = () => {
  const gateways = useSelector(getAllGateways);
  let renderGateways = "";

  renderGateways = gateways.map((gateway, index) => {
    return <ProjectCard key={index} data={gateway} />;
  });
  return <div>{renderGateways}</div>;
};

export default GatewayListing;
