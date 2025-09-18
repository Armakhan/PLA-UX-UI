import React, { Component } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CONSTANTDASHBOARD } from '../../Constants/Constant';
import './BarChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['Store 1', 'Store 2', 'Store 3', 'Store 4', 'Store 5', 'Store 6', 'Store 7', 'Store 8', 'Store 9', 'Store 10'],
        datasets: [
          {
            label: 'Week 1',
            data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 65],
            backgroundColor: '#178036', // Dark green from UX
            hoverBackgroundColor: '#1A9540',
            barPercentage: 0.8,
            categoryPercentage: 0.9,
          },
          {
            label: 'Week 2',
            data: [28, 48, 40, 19, 86, 27, 90, 45, 40, 35],
            backgroundColor: 'rgba(23, 140, 61, 0.98)', // Medium green from UX
            hoverBackgroundColor: 'rgba(23, 140, 61, 1)',
            barPercentage: 0.8,
            categoryPercentage: 0.9,
          },
          {
            label: 'Week 3',
            data: [45, 55, 65, 35, 75, 50, 60, 65, 50, 45],
            backgroundColor: '#33b569', // Light green from UX
            hoverBackgroundColor: '#3DCB78',
            barPercentage: 0.8,
            categoryPercentage: 0.9,
          },
          {
            label: 'Week 4',
            data: [35, 45, 50, 60, 40, 75, 65, 55, 45, 50],
            backgroundColor: '#7FD4A4', // Very light green from UX
            hoverBackgroundColor: '#92E9B7',
            barPercentage: 0.8,
            categoryPercentage: 0.9,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // Now using custom legend
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#333333',
            bodyColor: '#333333',
            borderColor: '#DDDDDD',
            borderWidth: 1,
            padding: 12,
            displayColors: true,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.raw} t`;
              }
            }
          },
        },
        animation: {
          duration: 1000
        },
        hover: {
          mode: 'index',
          intersect: false
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              drawBorder: false,
              drawOnChartArea: true,
            },
            ticks: {
              font: {
                size: 10,
              },
            },
            title: {
              display: true,
              text: 'Carbon Saving (tonnes)',
              font: {
                size: 12,
                weight: 'bold'
              },
              padding: {top: 0, bottom: 10}
            }
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 10,
              },
              maxRotation: 0,
              autoSkip: true,
            },
          },
        },
      }
    };
    
    // Bind the resize handler
    this.handleResize = this.handleResize.bind(this);
  }
  
  componentDidMount() {
    // Add resize event listener
    window.addEventListener('resize', this.handleResize);
  }
  
  componentWillUnmount() {
    // Remove resize event listener
    window.removeEventListener('resize', this.handleResize);
  }
  
  handleResize() {
    // Simply force a re-render to allow Chart.js's responsive feature to handle sizing
    this.forceUpdate();
  }
  
  handleClose = () => {
    // Handle close action - in a real app, this might hide the chart or switch views
    console.log('Closing bar chart');
  }

  render() {
    return (
      <div className="bar-chart-container">
        <div className="chart-header">
          <div className="chart-title">Carbon savings (t)</div>
          <button className="chart-close-btn" onClick={this.handleClose}>×</button>
        </div>
        <div className="bar-chart-wrapper">
          <Bar data={this.state.data} options={this.state.options} />
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-color week-1"></span>
            <span className="legend-label">Week 1</span>
          </div>
          <div className="legend-item">
            <span className="legend-color week-2"></span>
            <span className="legend-label">Week 2</span>
          </div>
          <div className="legend-item">
            <span className="legend-color week-3"></span>
            <span className="legend-label">Week 3</span>
          </div>
          <div className="legend-item">
            <span className="legend-color week-4"></span>
            <span className="legend-label">Week 4</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;