// import React, { useEffect, useState } from 'react'
// import "./Hero.scss";
// import { ReactTyped } from "react-typed";

// const Hero = () => {

//     return (
//         <div className="hero">
//             <div className="text">
//                 <h1 className='heading10'><b>Future of CryptoTrading</b></h1>
//                 <div className="animatedtext">
//                     <ReactTyped
//                         strings={[
//                             "Track",
//                             "Analyze",
//                             "Learn"
//                         ]}
//                         typeSpeed={40}
//                         backSpeed={50}
//                         loop>

//                     </ReactTyped>
//                 </div>

//                 <div className="main">
//                     <h1>Everything in one place,</h1>
//                 </div>
//                 <div className="slogan">

//                     <h1>Invest in crypto</h1>
//                     <h1>Invest in future</h1>
//                 </div>



//             </div>


//         </div>
//     )
// }

// export default Hero;
import React from 'react';
import './Hero.scss';
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className="hero">
            <div className="text">
                <h1 className="heading10"><b>Future of CryptoTrading</b></h1>
                <div className="animatedtext">
                    <ReactTyped
                        strings={[
                            "Track",
                            "Analyze",
                            "Learn"
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
                <div className="main">
                    <h1>Everything in one place,</h1>
                </div>
                <div className="slogan">
                    <h1>Invest in crypto</h1>
                    <h1>Invest in future</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
