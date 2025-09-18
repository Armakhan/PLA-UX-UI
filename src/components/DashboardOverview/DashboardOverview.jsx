import React, { Component } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import HeaderNav from '../HeaderComponent/HeaderPage';
import FooterContent from '../StoreManagerHome/FooterContent';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import { CONSTANTDASHBOARD } from '../../Constants/Constant';
import './DashboardOverviewStyle.css';
import './InteractiveStyles.css';
import './ResponsiveStyles.css';
import './AdditionalStyles.css';
import './ChartResponsive.css';
import './ChartOptionsStyles.css';
import './DonutChartSize.css';
import './ChartIcons.css';

class DashboardOverview extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: 2, // Index 2 corresponds to 'Challenge Overview'
      selectedChartType: 4, // Default to donut chart
      field: CONSTANTDASHBOARD.DOLLAR_SAVING,
      dataType: CONSTANTDASHBOARD.WEEKLY,
      value: CONSTANTDASHBOARD.ALL_STORE,
      isLeaderboardVisible: false,
      windowWidth: window.innerWidth,
    };

    // Window resize handler reference for cleanup
    this.handleResize = this.handleResize.bind(this);
    
    // Chart type icons - matching the icons in the UX design
    this.chartTypes = [
      { id: 0, icon: "bar-chart", label: "Bar Chart" },
      { id: 1, icon: "bar-chart-alt", label: "Bar Chart Alt" },
      { id: 2, icon: "stacked-chart", label: "Stacked Chart" },
      { id: 3, icon: "line-chart", label: "Line Chart" },
      { id: 4, icon: "area-chart", label: "Area Chart" },
      { id: 5, icon: "donut-chart", label: "Donut Chart" },
      { id: 6, icon: "pie-chart", label: "Pie Chart" },
    ];

    // Field options
    this.fieldOptions = [
      { value: 'dollar', label: CONSTANTDASHBOARD.DOLLAR_SAVING },
      { value: 'carbon', label: CONSTANTDASHBOARD.CARBON_SAVING },
      { value: 'waste', label: CONSTANTDASHBOARD.WASTE_SAVING },
    ];

    // Data type options
    this.dataTypeOptions = [
      { value: 'weekly', label: CONSTANTDASHBOARD.WEEKLY },
      { value: 'monthly', label: 'Monthly' },
      { value: 'yearly', label: 'Yearly' },
    ];

    // Value options
    this.valueOptions = [
      { value: 'all', label: CONSTANTDASHBOARD.ALL_STORE },
      { value: 'store1', label: 'Store 1' },
      { value: 'store2', label: 'Store 2' },
      { value: 'store3', label: 'Store 3' },
      { value: 'store4', label: 'Store 4' },
      { value: 'store5', label: 'Store 5' },
    ];
  }

  componentDidMount() {
    // Add window resize listener
    window.addEventListener('resize', this.handleResize);
  }
  
  componentWillUnmount() {
    // Clean up resize listener
    window.removeEventListener('resize', this.handleResize);
  }
  
  handleResize() {
    // Update window width in state
    const windowWidth = window.innerWidth;
    this.setState({ 
      windowWidth,
      // Auto-hide leaderboard on small screens
      isLeaderboardVisible: windowWidth < 576 ? false : this.state.isLeaderboardVisible
    });
  }

  handleTabClick = (tabIndex) => {
    this.setState({ activeTab: tabIndex });
  };

  handleChartTypeClick = (chartTypeId) => {
    this.setState({ selectedChartType: chartTypeId });
  };

  handleFieldChange = (e) => {
    this.setState({ field: e.target.value });
  };

  handleDataTypeChange = (e) => {
    this.setState({ dataType: e.target.value });
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSave = () => {
    // Save button functionality
    console.log('Saving chart configuration:', {
      field: this.state.field,
      dataType: this.state.dataType,
      value: this.state.value,
      chartType: this.state.selectedChartType
    });
  };

  handleShowLeaderboard = () => {
    this.setState({ isLeaderboardVisible: !this.state.isLeaderboardVisible });
  };

  handleBackClick = () => {
    // Navigate back to home
    window.location.href = '/storehome';
  };

  renderChartTypeSelector() {
    return (
      <div className="chart-selector">
        {this.chartTypes.map((chartType) => (
          <div
            key={chartType.id}
            className={`chart-type ${this.state.selectedChartType === chartType.id ? 'active' : ''}`}
            onClick={() => this.handleChartTypeClick(chartType.id)}
            title={chartType.label}
          >
            <div className="chart-type-icon">
              {chartType.id === 0 && <div className="chart-icon bar-icon">&#x25A0;&#x25A0;&#x25A0;</div>}
              {chartType.id === 1 && <div className="chart-icon bar-alt-icon">&#x25A0;</div>}
              {chartType.id === 2 && <div className="chart-icon stacked-icon">&#x25A0;&#x25A0;</div>}
              {chartType.id === 3 && <div className="chart-icon line-icon">&#x2015;</div>}
              {chartType.id === 4 && <div className="chart-icon area-icon">&#x25B2;</div>}
              {chartType.id === 5 && <div className="chart-icon donut-icon">&#x25EF;</div>}
              {chartType.id === 6 && <div className="chart-icon pie-icon">&#x25C7;</div>}
            </div>
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div className="dashboard-container">
        <HeaderNav />
        
        <div className="dashboard-header">
          <button className="back-button" onClick={this.handleBackClick}>
            <AiOutlineArrowLeft />
            {CONSTANTDASHBOARD.BACK}
          </button>
          <h1 className="dashboard-title">{CONSTANTDASHBOARD.PACKAGING_PERIL_CHALLENGE}</h1>
        </div>
        
        <div className="tabs-container">
          <div 
            className={`tab ${this.state.activeTab === 0 ? 'active' : ''}`}
            onClick={() => this.handleTabClick(0)}
          >
            {CONSTANTDASHBOARD.CHALLENGE_DETAILS}
          </div>
          <div 
            className={`tab ${this.state.activeTab === 1 ? 'active' : ''}`}
            onClick={() => this.handleTabClick(1)}
          >
            {CONSTANTDASHBOARD.MAP_VIEW}
          </div>
          <div 
            className={`tab ${this.state.activeTab === 2 ? 'active' : ''}`}
            onClick={() => this.handleTabClick(2)}
          >
            {CONSTANTDASHBOARD.CHALLENGE_OVERVIEW}
          </div>
        </div>
        
        <div className="metrics-container">
          <div className="metric-section">
            <div className="metric">
              {CONSTANTDASHBOARD.CARBON_SAVING}: <span>{CONSTANTDASHBOARD.CARBON_SAVING_T}</span>
            </div>
            <div className="metric">
              {CONSTANTDASHBOARD.WASTE_SAVING}: <span>{CONSTANTDASHBOARD.WASTE_SAVING_T}</span>
            </div>
            <div className="metric">
              {CONSTANTDASHBOARD.DOLLAR_SAVING}: <span>{CONSTANTDASHBOARD.DOLLAR_SAVING_MILLION}</span>
            </div>
          </div>
          
          <button 
            className={`show-leaderboard ${this.state.isLeaderboardVisible ? 'active' : ''}`}
            onClick={this.handleShowLeaderboard}
          >
            {CONSTANTDASHBOARD.SHOW_LEADERBOARD}
            {this.state.isLeaderboardVisible && <span className="leaderboard-indicator"></span>}
          </button>
        </div>
        
        <div className="charts-panel">
          <div className="chart-options-sidebar">
            <h2>{CONSTANTDASHBOARD.CHARTS}</h2>
            
            {this.renderChartTypeSelector()}
            
            <div className="field-selector">
              <div className="field-label">{CONSTANTDASHBOARD.FIELD}</div>
              <select 
                className="field-dropdown"
                value={this.state.field}
                onChange={this.handleFieldChange}
              >
                {this.fieldOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <div className="field-selector">
              <div className="field-label">{CONSTANTDASHBOARD.DATA_TYPE}</div>
              <select 
                className="field-dropdown"
                value={this.state.dataType}
                onChange={this.handleDataTypeChange}
              >
                {this.dataTypeOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <div className="field-selector">
              <div className="field-label">{CONSTANTDASHBOARD.VALUE}</div>
              <select 
                className="field-dropdown"
                value={this.state.value}
                onChange={this.handleValueChange}
              >
                {this.valueOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <button 
              className="save-button"
              onClick={this.handleSave}
            >
              {CONSTANTDASHBOARD.SAVE}
            </button>
          </div>
          
          <div className="charts-display">
              <DonutChart />
              <BarChart />
          </div>
        </div>
        
        {this.state.isLeaderboardVisible && (
          <div className="leaderboard-overlay">
            <div className="leaderboard-panel">
              <div className="leaderboard-header">
                <h2>Sustainability Leaderboard</h2>
                <button 
                  className="close-leaderboard" 
                  onClick={this.handleShowLeaderboard}
                >
                  ×
                </button>
              </div>
              <div className="leaderboard-content">
                <div className="leaderboard-item">
                  <div className="rank">1</div>
                  <div className="store-name">Store 5</div>
                  <div className="score">95%</div>
                </div>
                <div className="leaderboard-item">
                  <div className="rank">2</div>
                  <div className="store-name">Store 3</div>
                  <div className="score">87%</div>
                </div>
                <div className="leaderboard-item">
                  <div className="rank">3</div>
                  <div className="store-name">Store 8</div>
                  <div className="score">82%</div>
                </div>
                <div className="leaderboard-item">
                  <div className="rank">4</div>
                  <div className="store-name">Store 1</div>
                  <div className="score">75%</div>
                </div>
                <div className="leaderboard-item">
                  <div className="rank">5</div>
                  <div className="store-name">Store 10</div>
                  <div className="score">71%</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="dashboard-footer">
          <div className="powered-by">Powered by ETAP</div>
          <div className="copyright">{CONSTANTDASHBOARD.COPYRIGHT}</div>
        </div>
        
        <FooterContent />
      </div>
    );
  }
}

export default DashboardOverview;