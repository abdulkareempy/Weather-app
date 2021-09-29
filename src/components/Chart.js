import {Line} from "react-chartjs-2";
import React from 'react'

function Chart({dailyData}) {
    const data = {
        labels: dailyData.xAxis,
        datasets: [
          {
            label: 'Daily Temp in *C',
            data: dailyData.yAxis,
            fill: true,
            backgroundColor: ['rgb(255, 99, 132)'],
            borderColor: 'rgba(25, 25, 132, 0.9)',
          },
        ],
      };
      
      const options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      };
      
    return (
        <div>
            <Line 
            data = {data}
            options={options}/>
        </div>
    )
}

export default Chart
