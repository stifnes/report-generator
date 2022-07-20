import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mvpApi from '../../common/mvpApi';

export const fetchAsyncGateways = createAsyncThunk('gateways/fetchAsyncGateways' , async () => {
     const response = await mvpApi.get('/gateways')
      .catch((err) => {
        console.error(err)
      })
    let data = response.data.data
    return data
})

const initialState = {
  gateways: [],
  selectedGateway: "",
  selectedGatewayName: "All Gateways",
  gatewayMap: {},
};

const gatewaySlice = createSlice({
  name: "gateways",
  initialState,
  reducers: {
    selectGateway: (state, { payload }) => {
      state.selectedGateway = payload;
    },
    selectGatewayName: (state, { payload }) => {
      state.selectedGatewayName = payload;
    },
    selectedGatewayMap: (state, { payload }) => {
      state.gatewayMap = payload
    }
  },
   extraReducers: {
    [fetchAsyncGateways.pending]: () => {
      console.log('pending')
    },
    [fetchAsyncGateways.fulfilled]: (state, {payload}) => {
      console.log('fetched successfully')
      return {...state, gateways: payload }
    },
  }
});

export const { selectGateway, selectGatewayName, selectedGatewayMap } = gatewaySlice.actions;
export const getAllGateways = (state) => state.gateways.gateways
export const getSelectedGateway = (state) => state.gateways.selectedGateway
export const getSelectedGatewayName = (state) => state.gateways.selectedGatewayName

export default gatewaySlice.reducer;

