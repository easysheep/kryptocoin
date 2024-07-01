import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  const { logedin } = useAuth();

  return (
    // <div className="navbar">
    //   <div className="left">
    //     <Link to="/">
    //       <img className="logoimg" src="./icons8-crypto.svg" alt="" />
    //     </Link>
    //     <div className="title">
    //       <h1>KryptoCoin</h1>
    //     </div>
    //   </div>
    //   <div className="menu-icon" onClick={toggleMobileMenu}>
    //     <GiHamburgerMenu />
    //   </div>
    //   <div className={`right ${isMobileMenuVisible ? 'active' : ''}`}>
    //     {!logedin ? (
    //       <ul>
    //         <li>
    //           <Link to="/details" className="explore" onClick={toggleMobileMenu}>
    //             Explore
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/hottoday" className="explore" onClick={toggleMobileMenu}>
    //             Hot Today
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/documenation" className="explore" onClick={toggleMobileMenu}>
    //             Why us?
    //           </Link>
    //         </li>
    //         <li>
    //           <button className="btn1">
    //             <Link to="/loginpage" className="explore" onClick={toggleMobileMenu}>
    //               Login
    //             </Link>
    //           </button>
    //         </li>
    //         <li>
    //           <button className="btn2">
    //             <Link to="/signpage" className="explore2" onClick={toggleMobileMenu}>
    //               Sign Up
    //             </Link>
    //           </button>
    //         </li>
    //       </ul>
    //     ) : (
    //       <div>
    //         {isDropdownVisible && (
    //           <div className="dropdown-content">
    //             <Link
    //               to="/watchlistpage"
    //               className="explore3"
    //               onClick={toggleDropdown}
    //             >
    //               MyWatchList
    //             </Link>
    //             <Link
    //               to="/signoutpage"
    //               className="explore3"
    //               onClick={toggleDropdown}
    //             >
    //               SignOut <FaSignOutAlt size={15} />
    //             </Link>
    //           </div>
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img className="logoimg" src="./icons8-crypto.svg" alt="" />
        </Link>
        <div className="title">
          <h1>KryptoCoin</h1>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <GiHamburgerMenu />
      </div>
      <div className={`right ${isMobileMenuVisible ? "active" : ""}`}>
        {!logedin ? (
          <ul>
            <li>
              <Link
                to="/details"
                className="explore"
                onClick={toggleMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/hottoday"
                className="explore"
                onClick={toggleMobileMenu}
              >
                Hot Today
              </Link>
            </li>
            <li>
              <Link
                to="/documenation"
                className="explore"
                onClick={toggleMobileMenu}
              >
                Why Us?
              </Link>
            </li>
            <li>
              <button className="btn1">
                <Link
                  to="/loginpage"
                  className="explore"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
              </button>
            </li>
            <li>
              <button className="btn2">
                <Link
                  to="/signpage"
                  className="explore2"
                  onClick={toggleMobileMenu}
                >
                  Sign Up
                </Link>
              </button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link
                to="/details"
                className="explore"
                onClick={toggleMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/hottoday"
                className="explore"
                onClick={toggleMobileMenu}
              >
                Hot Today
              </Link>
            </li>
            <li>
              <Link
                to="/documenation"
                className="explore"
                onClick={toggleMobileMenu}
              >
                Why Us?
              </Link>
            </li>
            <li>
              <Link
                to="/watchlistpage"
                className="explore3"
                onClick={toggleMobileMenu}
              >
                My Watchlist
              </Link>
            </li>
            <li>
              <button className="btn2">
                <Link
                  to="/signoutpage"
                  className="explore2"
                  onClick={toggleMobileMenu}
                >
                  Sign Out <FaSignOutAlt size={15} />
                </Link>
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
