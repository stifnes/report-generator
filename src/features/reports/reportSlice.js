import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectReport: [],
};

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    postReportData: (state, payload) => {
      state.projectReport = payload.payload;
    }
  },
});

export const { postReportData, setProjectNames } = reportSlice.actions;
export const getReport = (state) => state.reports.projectReport;
export default reportSlice.reducer;
