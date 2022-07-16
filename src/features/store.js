import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projects/projectSlice'
import gatewayReducer from './gateways/gatewaySlice'

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    gateways: gatewayReducer,
  },
})