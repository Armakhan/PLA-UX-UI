import React from 'react';
import StackedColumn from '../GraphChartFolder/StackedColumn';
import StackedHorizontal from '../GraphChartFolder/StackedHorizontal';
import './ChartDemo.css';

const ChartDemo = () => {
  return (
    <div className="chart-demo-container">
      <h1>Chart Components Demo</h1>
      
      <div className="demo-section">
        <h2>Stacked Column Chart</h2>
        <StackedColumn />
      </div>
      
      <div className="demo-section">
        <h2>Stacked Horizontal Chart</h2>
        <StackedHorizontal />
      </div>
    </div>
  );
};

export default ChartDemo;