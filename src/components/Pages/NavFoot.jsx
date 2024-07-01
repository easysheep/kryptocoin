import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
const NavFoot = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>   
    </div>
  )
}

export default NavFoot;

