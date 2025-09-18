import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackedColumn = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 15, 7, 12, 18],
        backgroundColor: '#178036',
      },
      {
        label: 'Dataset 2',
        data: [5, 8, 14, 6, 10],
        backgroundColor: 'rgba(23, 140, 61, 0.98)',
      },
      {
        label: 'Dataset 3',
        data: [3, 6, 9, 12, 15],
        backgroundColor: '#33b569',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            family: 'Roboto',
            style: 'normal', // Set font style to normal
          },
        },
      },
      y: {
        stacked: true,
        min: 10,   // Set the lower limit
        max: 50,   // Set the upper limit
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true, // Use point style for legend items
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedColumn;
