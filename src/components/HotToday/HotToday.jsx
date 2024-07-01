import React, { useEffect, useState } from 'react'
import "./HotToday.scss"
import 'typeface-lilita-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
function HotToday() {
  const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b067c5de51msh85a3d6b8d4084e4p186bdcjsn53b295afe793',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  const [coins, setcoins] = useState([]);
  const [unsortedarray, setunsortedarray] = useState([]);
  const [sortedarray, setsortedarray] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setcoins(result);
        setunsortedarray(result.data.coins);
      } catch (error) {
        console.error(error);
      }


    };
    fetchdata();

  }, [])

  useEffect(() => {
    const sortDataAscending = () => {
      const sortedData = [...unsortedarray].sort((a, b) => a.change - b.change);
      setsortedarray(sortedData);
    };

    sortDataAscending();

    console.log(sortedarray);
  }, [unsortedarray])

  const gainerarray = sortedarray.slice(45, 50);
  console.log(gainerarray);

  const loserarray = sortedarray.slice(0,5);
  console.log(loserarray);
  





  return (
    <div className='hottodaycont'>
      <div className="header">Hot Today</div>
      <div className="topgainers">
        <div className="gainh">Top Gainers Today</div>
        <div className="cardsection">
          {gainerarray.map((currency) => {
            return (
              <div className="cards" key={currency.id}>
                <h3>{currency.symbol}</h3>
                <span className='space'></span>
                <img className="iconimg" src={currency.iconUrl} alt="" />
                <h4>{Number(currency.price).toFixed(4)} USD</h4>
                {currency.change > 0 ? <h4><FontAwesomeIcon icon={faArrowUp} style={{ color: "green" }} /> {currency.change}%</h4> : <h4><FontAwesomeIcon icon={faArrowDown} style={{ color: "red" }} /> {currency.change}%</h4>}
                <h4>{currency.name}</h4>


              </div>

            )

          })}
        </div>
      </div>
      <div className="toplosers">
        <div className="lossh">Top Losers Today</div>
        <div className="cardsection">
        {loserarray.map((currency2) => {
            return (
              <div className="cards" key={currency2.id}>
                <h3>{currency2.symbol}</h3>
                <span className='space' ></span>
                <img className="iconimg" src={currency2.iconUrl} alt="" />
                <h4>{Number(currency2.price).toFixed(4)} USD</h4>
                {currency2.change > 0 ? <h4><FontAwesomeIcon icon={faArrowUp} style={{ color: "green" }} /> {currency2.change}%</h4> : <h4><FontAwesomeIcon icon={faArrowDown} style={{ color: "red" }} /> {currency2.change}%</h4>}
                <h4>{currency2.name}</h4>


              </div>

            )

          })}
          

        </div>
      </div>



    </div>
  )
}

export default HotToday;
