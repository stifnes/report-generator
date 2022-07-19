import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mvpApi from "../../common/mvpApi";

export const postAsyncReport = createAsyncThunk(
  "reports/postAsyncReport",
  // async ({ initialState }) => {
  //   await mvpApi.post("/report");
  // }
);

const initialState = {
  projectReport: []
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

console.log(initialState)

export const { postReportData } = reportSlice.actions;
export const getReport = (state) => state.reports.projectReport;
export default reportSlice.reducer;
