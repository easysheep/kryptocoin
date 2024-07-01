import React from 'react'
import './Footer.scss'
import { FaReddit } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">

                    <div className="footer-logo">
                        <img src="logo.png" alt="" />
                        <span className="brand-name">KryptoCoin</span>
                    </div>


                    <div className="socials">
                        <div >
                        <p className="ic"><FaReddit size={40}/>
                        </p><p>r/KryptoCoin</p>

                        </div>
                        <div >
                        <p className="ic"><FaXTwitter size={40}/>
                        </p><p>KrptoCoinX</p>

                        </div>
                        
                        <div >
                        <p className="ic"><BsTelegram size={40}/>
                        </p><p>KrptoCoin</p>

                        </div>


                    </div>
                    <div className="copyright">
                        <p>&copy; 2024 KryptoCoin. All Rights Reserved.</p>
                        <p>Disclaimer: Cryptocurrency investments involve risk</p>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Footer;
