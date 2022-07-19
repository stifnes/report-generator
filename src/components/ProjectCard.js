import React from 'react';

const ProjectCard = (props) => {
  const {data} = props;
  return (
    <div className="card">

      <h2> Project {data.index} </h2>
    </div>
  );
};

export default ProjectCard;