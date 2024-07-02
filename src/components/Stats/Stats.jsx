import React, { useEffect, useState } from 'react'
import "./Stats.scss";
import millify from 'millify';

const Stats = () => {
    
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b067c5de51msh85a3d6b8d4084e4p186bdcjsn53b295afe793',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    const[stats,setstats]=useState({});
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setstats(result);
            } catch (error) {
                console.error(error);
            }


        };
        fetchdata();

    },[])
    return (
        <div>
            <div className="stats">
                <h1 className='statheading'>Global Statistics</h1>
                <div className='grid'>
                    <div>
                        <h2>{stats && stats.data && stats.data.stats !== undefined?(stats.data.stats.totalExchanges):'error'}+</h2>
                        <p>Total Exchanges</p>
                    </div>
                    <div>
                        <h2>{stats && stats.data && stats.data.stats !== undefined?millify(stats.data.stats.totalMarketCap):'error'}+</h2>
                        <p>Total Marketcap</p>
                    </div>
                    <div>
                        <h2>{stats && stats.data && stats.data.stats !== undefined?stats.data.stats.totalCoins:'error'}+</h2>
                        <p>Total Coins</p>
                    </div>
                    <div>
                        <h2>{stats && stats.data && stats.data.stats !== undefined?millify(stats.data.stats.total24hVolume):'error'}+</h2>
                        <p>24hr Volume</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Stats;


