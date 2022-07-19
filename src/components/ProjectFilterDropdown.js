import React from 'react';
import { useSelector, useDispatch} from 'react-redux'

import { getAllProjects, selectProject, } from '../features/projects/projectSlice'

const FilterDropdown = (props) => {

  const dispatch = useDispatch();

  const updateSelectedProject = (e) =>{
    dispatch(selectProject(e.target.value));
  }

  const projects = useSelector(getAllProjects)
  const projectFilterOptions = projects.map((project) => { 
   return <option value={project.projectId} key={project.projectId}>
    {project.name}
  </option>
   })
  return (
    <div>
      <select name="project" onChange={updateSelectedProject}>
          <option value="projects">
            All Projects
          </option>
          {projectFilterOptions}
       </select>
    </div>
  );
};

export default FilterDropdown;