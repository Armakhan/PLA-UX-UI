import React, { useState } from 'react';
import BarChart from './BarChart';
import DonutChart from './DonutChart';
import ChartTypeSelector from './ChartTypeSelector';
import './DashboardCharts.css';

const DashboardCharts = () => {
  const [activeChartId, setActiveChartId] = useState(0);

  const handleSelectChart = (chartId) => {
    setActiveChartId(chartId);
  };

  // Render appropriate chart based on selection
  const renderChart = () => {
    switch (activeChartId) {
      case 0: // Bar Chart
        return <BarChart />;
      case 5: // Donut Chart
        return <DonutChart />;
      default:
        return <div className="chart-placeholder">Select a chart type</div>;
    }
  };

  return (
    <div className="dashboard-charts">
      <div className="chart-controls">
        <ChartTypeSelector 
          activeChartId={activeChartId} 
          onSelectChart={handleSelectChart} 
        />
      </div>
      <div className="chart-display">
        {renderChart()}
      </div>
    </div>
  );
};

export default DashboardCharts;