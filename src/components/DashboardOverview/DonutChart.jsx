import React, { Component } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CONSTANTDASHBOARD } from '../../Constants/Constant';
import './DonutChart.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3'],
        datasets: [
          {
            label: CONSTANTDASHBOARD.DOLLAR_SAVING,
            data: [1257.872, 3410.4, 2147.04],
            backgroundColor: [
              '#008B76', // Dark green from UX
              '#00BFA5', // Bright green from UX
              '#5CCEA8', // Light green from UX
            ],
            borderColor: [
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        events: [], // Completely disable all events
        plugins: {
          legend: {
            display: false // Hide the default legend as we're using custom legend
          },
          tooltip: {
            enabled: false // Disable tooltips since we're displaying values directly
          }
        },
        cutout: '70%',
        animation: {
          duration: 1000
        }
      },
      centerText: {
        label: 'All Stores'
      },
      values: {
        week1: '1257.872',
        week2: '3410.4',
        week3: '2147.04'
      }
    };
    
    // Bind resize handler
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
    // Simply adjust chart container size based on window size
    this.forceUpdate();
  }

  handleClose = () => {
    // Handle close action - in a real app, this might hide the chart or switch views
    console.log('Closing donut chart');
  }

  render() {
    return (
      <div className="donut-chart-container">
        <div className="chart-header">
          <div className="chart-title">Dollar Saving (million)</div>
          <button className="chart-close-btn" onClick={this.handleClose}>×</button>
        </div>
        <div className="donut-chart-wrapper">
          <div className="chart-values">
            <span className="value-top">{this.state.values.week1}</span>
            <span className="value-right">{this.state.values.week2}</span>
            <span className="value-bottom">{this.state.values.week3}</span>
          </div>
          <div className="donut-chart">
            <Doughnut data={this.state.data} options={this.state.options} />
          </div>
          <div className="donut-center-text">
            <div className="donut-label">{this.state.centerText.label}</div>
          </div>
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-dot week1"></span>
            <span className="legend-text">Week 1</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot week2"></span>
            <span className="legend-text">Week 2</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot week3"></span>
            <span className="legend-text">Week 3</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DonutChart;