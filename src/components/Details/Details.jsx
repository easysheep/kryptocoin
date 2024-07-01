import React from 'react'
import "./Details.scss";
import Linechart from '../Linechart/Linechart';
import millify from 'millify';
import { useState, useEffect } from 'react';
import { MdAddToPhotos } from "react-icons/md";
import Message from '../Message/Message';
import { useAuth } from "../../AuthContext";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
const Details = () => {
    const [array, setarray] = useState([]);
    const [mainelmnt, setmainelmnt] = useState('');
    const [element, setelement] = useState([]);
    const [timePeriod, settimePeriod] = useState('24h');
    const [handleOnChangeCalled, setHandleOnChangeCalled] = useState(false);
    const { mylist, setmylist } = useAuth();
    const [error, setError] = useState(null);








    const url1 = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b067c5de51msh85a3d6b8d4084e4p186bdcjsn53b295afe793',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };



    useEffect(() => {
        const fetchdata1 = async () => {
            try {
                const response1 = await fetch(url1, options1);
                const result1 = await response1.json();
                setarray(result1.data.coins);
            } catch (error) {
                console.error(error);
            }


        };
        fetchdata1();

    }, [])
    const handleOnChange = (e) => {
        if (e.key === 'Enter') {
            const capitalizedValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
            const coinExists = array.some(item => item.name === capitalizedValue);
            if (!coinExists) {
                setError("Coin not available or invalid.");
                toast.warn(error, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
            } else {
                setmainelmnt(capitalizedValue);
                setHandleOnChangeCalled(true);
                setError(null); // Clear error if coin is valid
            }
        }
    }
    
    
    

    let mainArray = [];
    useEffect(() => {
        if (mainelmnt) {
            mainArray = array.filter(item => item.name === mainelmnt);
            const id = mainArray[0]?.uuid;

            const url2 = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
            const options2 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b067c5de51msh85a3d6b8d4084e4p186bdcjsn53b295afe793',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };

            const fetchdata2 = async () => {
                try {
                    const response2 = await fetch(url2, options2);
                    const result2 = await response2.json();
                    setelement(result2);
                } catch (error) {
                    console.log("coin not found")
                    console.error(error);
                }
            };

            fetchdata2();
        }
    }, [mainelmnt, array]);

    const handleaddtolist = () => {
        if (element?.data?.coin) {
            const coinToAdd = element.data.coin;

            // Check if the coin is already in the list
            if (!mylist.some((item) => item.name === coinToAdd.name)) {
                // Add the coin to the list
                setmylist((prevList) => [...prevList, coinToAdd]);

                // Display success toast
                toast.success('Added to watchlist', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            } else {
                // Display a warning toast if the coin is already in the list
                toast.warning('Coin is already in the watchlist', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        } else {
            console.error("Coins data is undefined or null.");
        }
    };
    useEffect(() => {
        console.log("element.data.coin");
        console.log(mylist);
    })

    return (
        <div className='whole'>
            <div className="inputbar">
                <input type="text" placeholder='search assets' onKeyDown={handleOnChange} />

            </div>
            {!handleOnChangeCalled ? <Message /> :
                <div className='details'>

                    <div className="heading">
                        <div className="currimg"><img className="currimg-icon" src={element?.data?.coin?.iconUrl} alt="" /></div>

                        <div className="namecurr">{element?.data?.coin?.name}-{element?.data?.coin?.symbol}</div>
                    </div>
                    <div className="chart">
                        <Linechart key={element?.data?.coin?.uuid} currentprice={millify(element?.data?.coin?.price)} coinid={element?.data?.coin?.uuid} timeperiod={timePeriod} />
                        <MdAddToPhotos className='icon' size={40} onClick={handleaddtolist} />
                    </div>
                    <div className="btngroup">
                        <button className='timebtn' onClick={() => { settimePeriod('24h') }}><b>24h</b></button>
                        <button className='timebtn' onClick={() => { settimePeriod('7d') }}><b>7d</b></button>
                        <button className='timebtn' onClick={() => { settimePeriod('30d') }}><b>30d</b></button>
                        <button className='timebtn' onClick={() => { settimePeriod('3m') }}><b>3m</b></button>
                        <button className='timebtn' onClick={() => { settimePeriod('1y') }}><b>1y</b> </button>
                        <button className='timebtn' onClick={() => { settimePeriod('3y') }}><b>3y</b></button>
                        <button className='timebtn' onClick={() => { settimePeriod('5y') }}><b>5y</b></button>
                    </div>

                    <div className="graybox">
                        <div className="statheading">
                            <h4>{element?.data?.coin?.name} Market Statistics</h4>
                        </div>
                        <div className="otherstats">
                            <div className="otherstatsleft">
                                <div className="row">
                                    <div className="col1">Price to USD</div>
                                    <div className="col2">$ {millify(element?.data?.coin?.price)}</div>
                                </div>
                                <span></span>
                                <div className="row">
                                    <div className="col1">Rank</div>
                                    <div className="col2">{element?.data?.coin?.rank}</div>
                                </div>
                                <span></span>
                                <div className="row">
                                    <div className="col1">24h Volume</div>
                                    <div className="col2">{millify(element?.data?.coin?.['24hVolume'])}</div>
                                </div>
                                <span></span>
                                <div className="row">
                                    <div className="col1">Market Cap</div>
                                    <div className="col2">$ {millify(element?.data?.coin?.marketCap)}</div>
                                </div>
                                <span></span>
                                <div className="row">
                                    <div className="col1">All-time-high(daily avg.)</div>
                                    <div className="col2">$ {element?.data?.coin?.allTimeHigh?.price && millify(element?.data?.coin?.allTimeHigh?.price)}</div>
                                </div>
                            </div>
                            <div className="otherstatsright">
                                <div className="row">
                                    <div className="col1">Number Of Markets</div>
                                    <div className="col2">{element?.data?.coin?.numberOfMarkets}</div>
                                </div>
                                <span></span>
                                <div className="row">
                                    <div className="col1">Number Of Exchanges</div>
                                    <div className="col2">{element?.data?.coin?.numberOfExchanges}</div>
                                </div>
                                <span></span>
                                <div className="row">
                                    <div className="col1">Total Supply</div>
                                    <div className="col2">{element?.data?.coin?.supply?.total && millify(element?.data?.coin?.supply?.total)}</div>
                                </div>
                                <span></span>
                                <div className="row">
                                    <div className="col1">Circulating Supply</div>
                                    <div className="col2">{element?.data?.coin?.supply?.circulating && millify(element?.data?.coin?.supply?.circulating)}</div>
                                </div>

                            </div>

                        </div>
                    </div>




                </div>}


        </div>

    )
}

export default Details;
