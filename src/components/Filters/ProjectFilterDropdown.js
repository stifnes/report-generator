import React from 'react';
import { useSelector, useDispatch} from 'react-redux'

import { getAllProjects, selectProject, selectProjectName } from '../../features/projects/projectSlice'
import styles from './Filters.module.scss'


const FilterDropdown = (props) => {

  const dispatch = useDispatch();

  const updateSelectedProject = (e) =>{
    let index = e.nativeEvent.target.selectedIndex;
    dispatch(selectProject(e.target.value));
    dispatch(selectProjectName(e.nativeEvent.target[index].text));
  }

  const projects = useSelector(getAllProjects)
  const projectFilterOptions = projects.map((project) => { 
   return <option value={project.projectId} key={project.projectId} name={project.name}>
    {project.name}
  </option>
   })
  return (
    <div>
      <select name="projects" className={styles.filters} onChange={updateSelectedProject}>
          <option value="">
            All Projects
          </option>
          {projectFilterOptions}
       </select>
    </div>
  );
};

export default FilterDropdown;