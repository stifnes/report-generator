import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import { fetchAsyncProjects } from '../features/projects/projectSlice'
import { fetchAsyncGateways, getAllGateways } from '../features/gateways/gatewaySlice'
import ProjectListing from './ProjectListing';
import GatewayListing from './GatewayListing';
import FilterDropdown from './FilterDropdown';

const Main = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAsyncGateways())
      dispatch(fetchAsyncProjects())
  },[dispatch])

  const gateways = useSelector(getAllGateways)
  const gatewayFilterOptions = gateways.map((gateway) => { 
   return <option value={gateway.gatewayId} key={gateway.gatewayId}>
    {gateway.name}
  </option>
 })
  return (
    <div className="main">
      <div className="filters">
      <FilterDropdown/>
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