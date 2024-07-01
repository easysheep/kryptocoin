import React, { useEffect } from 'react'
import "./Mywatchlist.scss";
import { useAuth } from "../../AuthContext";
import millify from 'millify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
const Mywatchlist = () => {
  const { mylist,setmylist} = useAuth();
  useEffect(()=>{
  console.log(typeof mylist);
  console.log(mylist);

  })
  let sno=1;
  const handletrash = (itemname) => {
    toast.error('Removed from watchlist', {
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

    const updatedWatchlist = mylist.filter(item => item.name !== itemname);
    

    setmylist(updatedWatchlist);
  };
  
  return (
    <div className='mywatchlist'>
      <div className="mainlistcont">
        <div className="header">WatchList</div>
        <div className="columnshead">
          <div className='el1'>Name</div>
          <div className='el1'>Symbol</div>
          <div className='el1'>Rank</div>
          <div className='el1'>Change</div>
          <div className='el1'>Price</div>
          <div className='el1'>MarketCap</div>
          <div className='el1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>


        </div>
        <div className="ln"><div className="line_list"></div></div>
        
        <br />

        {mylist.map((item)=>(
   

          <div key={item.id} className='rendered'>
             
            <div  className='el'>{item.name}</div>
            <div className='el'>{item.symbol}</div>
            <div className='el'>{item.rank}</div>
            <div className='el'>{item.change > 0 ? <h4><FontAwesomeIcon icon={faArrowUp} style={{ color: "green" }} /> {item.change}%</h4> : <h4><FontAwesomeIcon icon={faArrowDown} style={{ color: "red" }} /> {item.change}%</h4>}</div>
            <div className='el'>${millify(item.price)}</div>
            <div className='el'>${millify(item.marketCap)}</div>
            <div className='el'><FaTrash className='trash'onClick={()=>handletrash(item.name)} /></div>


            
          </div>

           

        ))}

      </div>

      
    </div>
  )
}

export default Mywatchlist;
