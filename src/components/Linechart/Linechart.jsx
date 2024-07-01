import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';
import './Linechart.scss'

const Linechart = ({ currentprice, coinid, timeperiod }) => {
  const [coinhistory, setcoinhistory] = useState({});
  const url3 = `https://coinranking1.p.rapidapi.com/coin/${coinid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timeperiod}`;
  const options3 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b067c5de51msh85a3d6b8d4084e4p186bdcjsn53b295afe793',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  useEffect(() => {
    const fetchdata3 = async () => {
      try {
        const response3 = await fetch(url3, options3);
        const result3 = await response3.json();
        setcoinhistory(result3);

      } catch (error) {
        console.error(error);
      }


    };
    fetchdata3();
    return () => {
      setcoinhistory({});
    };

  }, [timeperiod])
  let coinprice = [];
  let timestamp = [];
  for (let i = 0; i < coinhistory?.data?.history?.length; i += 1) {
    const date = new Date(coinhistory.data.history[i].timestamp * 1000); 

    if (timeperiod < 24 * 60 * 60) {
      timestamp.push(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } else {
      timestamp.push(date.toLocaleDateString());
    }
    coinprice.push(coinhistory.data.history[i].price);

  }
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  )

  const data = {
    labels: timestamp,
    datasets: [
      {
        data: coinprice,
        label: 'Price In USD',
        fill: true,
        backgroundColor: '#6B45FF',
        borderColor: '#6B45FF',

      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    elements: {
      point: {
        radius: 1,
      }
    },
    maintainAspectRatio: false,
    responsive: true,
  };




  return (

    <div className='lin1'>
      <Line key={coinid} data={data} options={options} style={{ width: '800px', height: '400px ' }} />


    </div>
  )
}

export default Linechart;