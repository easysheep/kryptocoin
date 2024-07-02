import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./Currency.scss"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Currency = () => {
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b067c5de51msh85a3d6b8d4084e4p186bdcjsn53b295afe793',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    const [coins, setcoins] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setcoins(result);
            } catch (error) {
                console.error(error);
            }


        };
        fetchdata();

    }, [])
    useEffect(() => {
        console.log(coins?.data?.coins);
    }, [coins]);
    return (
        <div className='Currency'>
            <div className="box">
                <div className="leftbox">
                    <div className="currencytext">
                        <div className='h2'>Explore most popular and</div>
                        <div className='h2'>stable cryptos</div>
                        <span className='span'></span>
                        <div className='h3'>Like Bitcoin,Ethereum,Dogecoin,Solana</div>
                        <div className='h3'>and hundred of other digital currencies</div>
                        <button className='btn3'><Link to="/details" style={{ color: 'white', textDecoration: 'none' }}>Explore More</Link></button>
                    </div>

                </div>
                <div className="rightbox">
                    <div className="card-box">
                        {coins?.data?.coins.slice(0, 6).map((currency) => {
                            console.log(currency);
                            return (
                                <div className="card" key={currency.id}>
                                    <h3>{currency.symbol}</h3>
                                    <span className='span'></span>
                                    <img className="iconimg"src={currency.iconUrl} alt="" />
                                    <h4>{Number(currency.price).toFixed(4)} USD</h4>
                                    {currency.change>0?<h4><FontAwesomeIcon icon={faArrowUp} style={{color:"green"}} /> {currency.change}%</h4>:<h4><FontAwesomeIcon icon={faArrowDown} style={{color:"red"}} /> {currency.change}%</h4>}


                                </div>

                            )

                        })}

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Currency;


