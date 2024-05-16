"use strict";
const barChartEl = document.querySelector("#barChart"),
  barChartConfig = {
    chart: {
      height: 400,
      type: "bar",
      stacked: false,
      parentHeightOffset: 0,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        colors: {
          backgroundBarColors: [
            config.colors.bodyBg,
            config.colors.bodyBg,
            config.colors.bodyBg,
            config.colors.bodyBg,
            config.colors.bodyBg,
          ],
          backgroundBarRadius: 10,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "start",
      labels: {
        colors: config.colors.bodyColor,
        useSeriesColors: false,
      },
    },
    colors: [config.colors.primary, config.colors.secondary],
    stroke: {
      show: true,
      colors: ["transparent"],
    },
    grid: {
      borderColor: config.colors.borderColor,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    series: [
      {
        name: "Apple",
        data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180],
      },
      {
        name: "Samsung",
        data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20],
      },
    ],
    xaxis: {
      categories: [
        "7/12",
        "8/12",
        "9/12",
        "10/12",
        "11/12",
        "12/12",
        "13/12",
        "14/12",
        "15/12",
        "16/12",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: config.colors.textMuted,
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: config.colors.textMuted,
          fontSize: "13px",
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };
if (typeof barChartEl !== undefined && barChartEl !== null) {
  const barChart = new ApexCharts(barChartEl, barChartConfig);
  barChart.render();
}
