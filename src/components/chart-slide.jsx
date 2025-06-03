import React from "react";
import { Line } from "react-chartjs-2";
import { datasetsByTab } from "../chart-data/datasets";
import { chartLabels } from "../chart-data/labels";
import { getChartOptions } from "../chart-data/chart-options";
import styles from "../css/chart-slide.module.css";

const ChartSlide = ({ type }) => {
  if (!type) return null;

  const chartData = {
    labels: chartLabels,
    datasets: datasetsByTab[type] || [],
  };

  const title = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className={styles.chartBox}>
      <h3>{title} Speed</h3>
      <Line data={chartData} options={getChartOptions(type)} />
    </div>
  );
};

export default ChartSlide;
