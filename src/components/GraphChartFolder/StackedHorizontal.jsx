import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackedHorizontal = () => {
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [15, 25, 35],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Display data on the y-axis
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true, // Enable stacked bars
      },
      y: {
        stacked: true, // Enable stacked bars
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedHorizontal;
