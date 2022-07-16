import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'

import { fetchAsyncProjects } from '../features/projects/projectSlice'
import { fetchAsyncGateways } from '../features/gateways/gatewaySlice'
import ProjectListing from './ProjectListing';
import GatewayListing from './GatewayListing';

const Main = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAsyncGateways())
      dispatch(fetchAsyncProjects())
  },[dispatch])
  return (
    <div className="main">
      <div className="filters">
        <select name="project">
          <option value="projects">
            All Projects
          </option>
          <option value="project1">
            Project 1
          </option>
          <option value="project2">Project 2</option>
        </select>
        <select name="gateways">
          <option value="gateways">
            All gateways
          </option>
          <option value="gateway1">
            Gateway 1
          </option>
          <option value="gateway2">Gateway 2</option>
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