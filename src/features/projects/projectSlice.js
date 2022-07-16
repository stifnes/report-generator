import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mvpApi from '../../common/mvpApi';

export const fetchAsyncProjects = createAsyncThunk('projects/fetchAsyncProjects', async () => {
   const response = await mvpApi.get('/projects')
      .catch((err) => {
        console.error(err)
      })
    return response.data.data
})


const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProjects: (state, { payload }) => {
      state.projects = payload;
    },
  },
  extraReducers: {
    [fetchAsyncProjects.pending]: () => {
      console.log('pending')
    },
    [fetchAsyncProjects.fulfilled]: (state, {payload}) => {
      console.log('fetched successfully')
      return {...state, projects: payload }
    },
  }
});

export const { addProjects } = projectSlice.actions;
export const getAllProjects = (state) => state.projects.projects;

export default projectSlice.reducer;
