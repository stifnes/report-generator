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
  selectedProject: "projects"
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    selectProject: (state, { payload }) => {
      state.selectedProject = payload;
    }
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

export const { selectProject } = projectSlice.actions;
export const getAllProjects = (state) => state.projects.projects;
export const getSelectedProjects = (state) => state.projects.selectedProject

export default projectSlice.reducer;
