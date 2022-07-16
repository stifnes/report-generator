import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mvpApi from '../../common/mvpApi';

export const fetchAsyncGateways = createAsyncThunk('gateways/fetchAsyncGateways' , async () => {
     const response = await mvpApi.get('/gateways')
      .catch((err) => {
        console.error(err)
      })
    return response.data.data
})

const initialState = {
  gateways: [],
};

const gatewaySlice = createSlice({
  name: "gateways",
  initialState,
  reducers: {
    addGateways: (state, { payload }) => {
      state.gateways = payload;
    },
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

export const { addGateways } = gatewaySlice.actions;
export const getAllGateways = (state) => state.gateways.gateways

export default gatewaySlice.reducer;

