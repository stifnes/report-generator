import React from 'react';
import { useSelector, useDispatch} from 'react-redux'

import { getAllGateways, selectGateway } from '../features/gateways/gatewaySlice'

const GatewayFilterDropdown = (props) => {

  const dispatch = useDispatch();

  const updateSelectedGateway = (e) =>{
    dispatch(selectGateway(e.target.value));
  }

  const gateways = useSelector(getAllGateways)
  const gatewayFilterOptions = gateways.map((gateway) => { 
   return <option value={gateway.gatewayId} key={gateway.name}>
    {gateway.name}
  </option>
   })
  return (
    <div>
      <select name="gateway" onChange={updateSelectedGateway}>
          <option value="gateways">
            All Gateways
          </option>
          {gatewayFilterOptions}
       </select>
    </div>
  );
};

export default GatewayFilterDropdown;