// import React from 'react';
// import {Line} from 'react-chartjs-2';
// /* deprecated from mobile view and added to desktop only */

// const data = {
//     labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Water",
//         fill: false,
//         lineTension: 0.3,
//         backgroundColor: "null",
//         borderColor: "lightblue",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "pink",
//         pointBackgroundColor: "indigo",
//         pointBorderWidth: 1,
//         pointHoverRadius: 4,
//         pointHoverBackgroundColor: "pink",
//         pointHoverBorderColor: "indigo",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 1,
//         data: [0, 8, 6, 10, 6, 12, 10]
//       },
//       {
//         label: "Activity",
//         fill: false,
//         lineTension: 0.3,
//         backgroundColor: "null",
//         borderColor: "orange",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "pink",
//         pointBackgroundColor: "indigo",
//         pointBorderWidth: 1,
//         pointHoverRadius: 4,
//         pointHoverBackgroundColor: "pink",
//         pointHoverBorderColor: "indigo",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [30, 25, 45, 20, 30, 50, 45]
//       },
//       {
//         label: "Nutrition",
//         fill: false,
//         lineTension: 0.3,
//         backgroundColor: "null",
//         borderColor: "purple",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "pink",
//         pointBackgroundColor: "indigo",
//         pointBorderWidth: 1,
//         pointHoverRadius: 4,
//         pointHoverBackgroundColor: "pink",
//         pointHoverBorderColor: "indigo",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 5,
//         data: [2, 15, 14, 10, 20, 25, 14]
//       },
//       {
//         label: "Sleep",
//         fill: false,
//         lineTension: 0.3,
//         backgroundColor: "null",
//         borderColor: "darkblue",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "pink",
//         pointBackgroundColor: "indigo",
//         pointBorderWidth: 1,
//         pointHoverRadius: 4,
//         pointHoverBackgroundColor: "pink",
//         pointHoverBorderColor: "indigo",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 1,
//         data: [4, 2, 10, 8, 8, 12, 5]
//       },
//       {
//         label: "Breaks",
//         fill: false,
//         lineTension: 0.3,
//         backgroundColor: "null",
//         borderColor: "gold",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "pink",
//         pointBackgroundColor: "indigo",
//         pointBorderWidth: 1,
//         pointHoverRadius: 4,
//         pointHoverBackgroundColor: "pink",
//         pointHoverBorderColor: "indigo",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [6, 12, 22, 10, 5, 22, 15]
//       }
//     ],
//     options: {
//       legend: {
//         labels: {
//           defaultFontColor: "#fff",
//           defaultFontFamily: "Catamaran"
//         }
//       },
//       scales: {
//         xAxes: [
//           {
//             gridLines: {
//               display: true,
//               color: "#ffff",
//               lineWidth: 2
//             }
//           }
//         ],
//         yAxes: [
//           {
//             gridLines: {
//               display: true,
//               color: "#ffff",
//               lineWidth: 2
//             },
//             ticks: {
//               beginaAtZero: false
//             }
//           }
//         ]
//       }
//     }
//   };
  
//   const LineChart = () => {
//     return (
//       <div className="chart-container">
//         <div className="line-charts">
//           <h2>your activities</h2>
//           <Line data={data} />
//         </div>
//       </div>
//     );
//   };
  
//   export default LineChart;
  