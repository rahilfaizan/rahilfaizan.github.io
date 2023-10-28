// chartConfig.js
import Chart from "chart.js/auto";

const customPlugin = {
  id: "customGradient",
  afterDraw: (chart, args, options) => {
    const { ctx, chartArea } = chart;
    const { datasets } = chart.data;
  },
};
let chartInstance = null;

export const createBarChart = (chartData, isAboveLarge) => {
  const labels = chartData.map((skill) => skill.skill);
  const data = chartData.map((skill) => skill.level);

  if (chartInstance) {
    chartInstance.destroy();
  }

  const ctx = document.getElementById("myChart").getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Skill Level",
          data: data,
          borderColor: [
            "#FF6B9C",
            "#FFC445",
            "#1AEEFF",
            "#36D9AD",
            "#36A2EB",
            "#FFBD0C",
            "#FC59FF",
            "#24CBFF",
            "#FFD300",
          ],
          borderWidth: 3,
        },
      ],
    },
    plugins: [customPlugin],
    options: {
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          max: 5,
        },
        y: {
          ticks: {
            autoSkip: false, // Prevent automatic skipping of labels
            maxRotation: 0, // Rotate labels to prevent overlap
          },
          
        },
      },
      responsive: true,
      maintainAspectRatio:false,
    },
  });
};