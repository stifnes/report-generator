import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import { fetchAsyncProjects, getAllProjects } from '../features/projects/projectSlice'
import { fetchAsyncGateways, getAllGateways } from '../features/gateways/gatewaySlice'
import ProjectListing from './ProjectListing';
import GatewayListing from './GatewayListing';

const Main = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAsyncGateways())
      dispatch(fetchAsyncProjects())
  },[dispatch])

  const projects = useSelector(getAllProjects)
  const gateways = useSelector(getAllGateways)
  const projectFilterOptions = projects.map((project) => { 
   return <option value={project.projectId} key={project.projectId}>
    {project.name}
  </option>
   })
  const gatewayFilterOptions = gateways.map((gateway) => { 
   return <option value={gateway.gatewayId} key={gateway.gatewayId}>
    {gateway.name}
  </option>
 })
  return (
    <div className="main">
      <div className="filters">
        <select name="project">
          <option value="projects">
            All Projects
          </option>
          {projectFilterOptions}
        </select>
        <select name="gateways">
          <option value="gateways">
            All gateways
          </option>
          {gatewayFilterOptions}
        </select>
      </div>
      <ProjectListing/>
      <div>
      <GatewayListing/>
      </div>
    </div>  
  );
};

export default Main;