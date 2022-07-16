import React from 'react';

const ProjectCard = (props) => {
  const {data} = props;
  return (
    <div className="card">
      <h2> {data.name} </h2>
    </div>
  );
};

export default ProjectCard;