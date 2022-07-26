import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projects/projectSlice";
import gatewayReducer from "./gateways/gatewaySlice";
import reportReducer from "./reports/reportSlice";
import userReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    gateways: gatewayReducer,
    reports: reportReducer,
    users: userReducer,
  },
});
