import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './StackedHorizontal.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // Display data on the y-axis
    plugins: {
      legend: {
        display: false, // Hide built-in legend since we have custom legend
      },
      tooltip: {
        enabled: true,
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

  return (
    <div className="stacked-horizontal-container">
      <div className="chart-header">
        <div className="chart-title">Stacked Horizontal Chart</div>
      </div>
      <div className="stacked-horizontal-wrapper">
        <Bar data={data} options={options} />
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color dataset-1"></span>
          <span className="legend-label">Dataset 1</span>
        </div>
        <div className="legend-item">
          <span className="legend-color dataset-2"></span>
          <span className="legend-label">Dataset 2</span>
        </div>
      </div>
    </div>
  );
};

export default StackedHorizontal;
