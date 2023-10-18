import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./styles.css"

const DonutChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#6E4AC1', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#6E4AC1', '#36A2EB', '#FFCE56'],
        // borderWidth: 10,
         borderColor:['#6E4AC1', '#36A2EB', '#FFCE56'],
         hoverBorderWidth: 5,
         cutout: 60,
        animation : {
          animateRotate: true,
        }
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      center: {
        text: 'Red is 2/3 the total numbers',
        color: '#FF6384', // Default is #000000
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      
    },
  };

  return (
    <div className='donut-container'>
      <Doughnut  data={data} options={options} />
    </div>
  );
};

export default DonutChart;
