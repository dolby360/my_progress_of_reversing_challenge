import React from "react";
import "./PieChart.css"; // Create a CSS file for styling

const PieChart = ({ percentage }) => {
  const offset = 25; // Offset to start the chart from 12 o'clock position
  const strokeWidth = 15; // Width of the chart stroke
  const radius = 80; // Increased radius for a larger circle

  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - percentage) / 100) * circumference;

  return (
    <div className="pie-chart">
      <svg width={radius * 2} height={radius * 2}>
        <circle
          className="background-circle"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-circle"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference}`}
          transform={`rotate(${offset} ${radius} ${radius})`}
        />
      </svg>
      <div className="percentage">{percentage}%</div>
    </div>
  );
};

export default PieChart;
