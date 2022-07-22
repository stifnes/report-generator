import React from 'react';
import { useSelector, useDispatch} from 'react-redux'

import { getAllGateways, selectGateway, selectGatewayName } from '../../features/gateways/gatewaySlice'
import styles from './Filters.module.scss'

const GatewayFilterDropdown = (props) => {

  const dispatch = useDispatch();

  const updateSelectedGateway = (e) =>{
    dispatch(selectGateway(e.target.value));
    let index = e.nativeEvent.target.selectedIndex;
    dispatch(selectGatewayName(e.nativeEvent.target[index].text));
  }

  const gateways = useSelector(getAllGateways)
  const gatewayMap  = new Map();

  const gatewayFilterOptions = gateways.map((gateway) => { 
   let {name, gatewayId} = gateway;
   gatewayMap.set(gatewayId, name);
   return <option value={gatewayId} key={name}>
    {name}
  </option>
   });

  return (
    <div>
      <select name="gateway" className={styles.filters} onChange={updateSelectedGateway}>
          <option value="">
            All Gateways
          </option>
          {gatewayFilterOptions}
       </select>
    </div>
  );
};

export default GatewayFilterDropdown;