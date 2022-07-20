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
  selectedProject: "",
  selectedProjectName: "All Projects"
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    selectProject: (state, { payload }) => {
      state.selectedProject = payload;
    },
    selectProjectName: (state, { payload }) => {
      state.selectedProjectName = payload;
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

export const { selectProject, selectProjectName } = projectSlice.actions;
export const getAllProjects = (state) => state.projects.projects;
export const getSelectedProjects = (state) => state.projects.selectedProject
export const getSelectedProjectName = (state) => state.projects.selectedProjectName

export default projectSlice.reducer;
