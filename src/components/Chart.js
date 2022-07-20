import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4' ],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 15, 15, 60],
      backgroundColor: [
        '#6497B1',
        '#FFC107',
        '#F24E1E',
        '#A259FF'
      ],
      borderColor: [
        '#fff'
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
      <div style={{ height: '500px', width: '500px', margin: '0 auto' }}>
        <Doughnut data={data}   options={{
            responsive: true,
            maintainAspectRatio: true,
          }}/>
      </div>
  );
};

export default Chart;