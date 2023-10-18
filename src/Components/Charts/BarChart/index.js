import React from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import "./styles.css"

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Sample Bar Chart',
        data: [12, 19, 3, 5, 2, 3, 8, 10 , 4, 6, 7 ,10],
        backgroundColor: [
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
          'rgba(128, 128, 128, 0.2)',
        ],
        borderColor: [
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
        ],
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
        hoverBackgroundColor: '#6E4AC1',
        
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    indexAxis: 'x',
    scales: {
        x: {
          grid: {
            display: false,
          },
          border:{
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          border:{
            display: false,
          },
          ticks:{
            display : false,
          },
        }
      },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        
      },
    },
  };

  return (
    <div className='main-bar-container'>
    <div className='bar-upper'>
      <div className='bar-upper-left'>
        <p className='overview'>Overview</p>
        <p className='monthly-earning'>Monthly Earning</p>
      </div>
      <div className='bar-upper-right'>
      <select name="earningDropdown" id="earning-dropdown">
      <option value="quarterly">Quarterly</option>
      <option value="yearly">Yearly</option>
      
  </select>
      </div>
    </div>
    <div className='temp-container'>
      <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
