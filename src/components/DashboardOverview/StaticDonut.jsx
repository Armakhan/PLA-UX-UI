import React from 'react';
import { CONSTANTDASHBOARD } from '../../Constants/Constant';
import './StaticDonut.css';

const StaticDonut = () => {
  return (
    <div className="donut-chart-container">
      <div className="chart-header">
        <div className="chart-title">Dollar Saving (million)</div>
        <button className="chart-close-btn">×</button>
      </div>
      <div className="static-donut-wrapper">
        <div className="static-donut">
          <div className="donut-segment segment1"></div>
          <div className="donut-segment segment2"></div>
          <div className="donut-segment segment3"></div>
          <div className="donut-center">
            <div className="donut-value">$2,147.04</div>
            <div className="donut-label">All Stores</div>
          </div>
          <div className="donut-data-values">
            <div className="data-value data-value-left">$1,257.87</div>
            <div className="data-value data-value-right">$3,410.40</div>
            <div className="data-value data-value-bottom">$2,147.04</div>
          </div>
        </div>
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color all-stores"></span>
          <span className="legend-label">Week 1</span>
        </div>
        <div className="legend-item">
          <span className="legend-color week-1"></span>
          <span className="legend-label">Week 2</span>
        </div>
        <div className="legend-item">
          <span className="legend-color week-2"></span>
          <span className="legend-label">Week 3</span>
        </div>
      </div>
    </div>
  );
};

export default StaticDonut;