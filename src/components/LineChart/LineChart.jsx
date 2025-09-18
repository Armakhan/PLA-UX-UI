import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { CONSTANTFORMCONTAINER } from "../../Constants/Constant";
Chart.register(...registerables);
//shows the entire linechart.
const LineChart = ({ chartStyle, titleStyle,linechartdropdownstyle,dataset1,dataset2,dataset3 }) => {
  const [selectedData, setSelectedData] = useState("dataset1");
  //handles the event according to the change of the dropdown.
  const handleDataChange = (event) => {
    setSelectedData(event.target.value);
  };
  
  const datasets = {dataset1,dataset2,dataset3};
  const data = {
    labels: ["1", "2", "3", "4"],
    datasets: [datasets[selectedData]],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        suggestedMax: 100,
        suggestedMin: 0,
        title: {
          display: true,
          text: "Percentage",
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Week",
        },
      },
    },
  };
  return (
    <div>
      <div style={{display:"flex"}}>
        <h2 style={titleStyle}>{CONSTANTFORMCONTAINER.SAVINGSPERWEEK}</h2>
        <span>
        <select
          style={linechartdropdownstyle}
          className="dropdownmargin"
          value={selectedData}
          onChange={handleDataChange}
        >
          <option value="dataset1">{CONSTANTFORMCONTAINER.CO2}</option>
          <option value="dataset2">{CONSTANTFORMCONTAINER.DOLLAR}</option>
          <option value="dataset3">{CONSTANTFORMCONTAINER.WASTESAVINGS}</option>
        </select>
        </span>
      </div>
      <Line data={data} options={options} style={chartStyle}/>
    </div>
  );
};
export default LineChart;
