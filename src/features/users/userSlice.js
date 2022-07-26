import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mvpApi from '../../common/mvpApi';

export const fetchAsyncUsers = createAsyncThunk('users/fetchAsyncUsers', async () => {
   const response = await mvpApi.get('/users')
      .catch((err) => {
        console.error(err)
      })
      return response.data.data
})


const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchAsyncUsers.pending]: () => {},
    [fetchAsyncUsers.fulfilled]: (state, {payload}) => {
      return {...state, users: payload }
    },
  }
});

export const getAllUsers = (state) => state.users.users;

export default userSlice.reducer;
