import React from "react";
import "./PieChart.css";

const PieChart = () => {
  const fillPercentage = 28;

  const sliceStyles = {
    transform: `rotate(${(fillPercentage / 100) * 360}deg)`
  };

  return (
    <div className="pie-chart">
      <div className="slice-container">
        <div className="slice" style={sliceStyles}>
          <span className="slice-text">{fillPercentage}%</span>
        </div>
      </div>
      <div className="gray-slice">
        <span className="gray-slice-text">{100 - fillPercentage}%</span>
      </div>
    </div>
  );
};

export default PieChart;
