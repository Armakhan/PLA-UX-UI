import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './StackedColumn.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
    responsive: true,
    maintainAspectRatio: false,
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
        min: 0,   // Set the lower limit
        max: 50,   // Set the upper limit
      },
    },
    plugins: {
      legend: {
        display: false, // Hide built-in legend since we have custom legend
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="stacked-column-container">
      <div className="chart-header">
        <div className="chart-title">Stacked Column Chart</div>
      </div>
      <div className="stacked-column-wrapper">
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
        <div className="legend-item">
          <span className="legend-color dataset-3"></span>
          <span className="legend-label">Dataset 3</span>
        </div>
      </div>
    </div>
  );
};

export default StackedColumn;
