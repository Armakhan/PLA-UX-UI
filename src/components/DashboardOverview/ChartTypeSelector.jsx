import React from 'react';
import './ChartTypeSelector.css';

const ChartTypeSelector = ({ activeChartId, onSelectChart }) => {
  // Chart types definition
  const chartTypes = [
    { id: 0, name: 'Bar Chart', icon: 'Bar' },
    { id: 1, name: 'Alternative Bar Chart', icon: 'Alt' },
    { id: 2, name: 'Stacked Bar Chart', icon: 'Stk' },
    { id: 3, name: 'Line Chart', icon: 'Line' },
    { id: 4, name: 'Area Chart', icon: 'Area' },
    { id: 5, name: 'Donut Chart', icon: 'Dnt' },
    { id: 6, name: 'Pie Chart', icon: 'Pie' }
  ];

  return (
    <div className="chart-type-selector">
      <div className="chart-type-header">Chart Type</div>
      <div className="chart-type-options">
        {chartTypes.map(chartType => (
          <div 
            key={chartType.id}
            className={`chart-type ${activeChartId === chartType.id ? 'active' : ''}`}
            onClick={() => onSelectChart(chartType.id)}
            title={chartType.name}
          >
            <div className="chart-icon">
              {chartType.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartTypeSelector;