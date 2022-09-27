/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../logo1.png";
import "./Navigation.css";
const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header>
      <div className='nav-container flexer-sb'>
        <nav className='flexer-sb'>
          <div className='logo'>
            <img src={Logo} alt='MovieWorld' />
          </div>
          <ul
            className={isMobile ? "navMenu" : "flexer-sb"}
            onClick={() => setIsMobile(false)}>
            <Link to='/'>Home</Link>
            <Link to='/series'>Series</Link>
            <Link to='/movies'>Movies</Link>
          </ul>
          <button
            className='toggle'
            onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <i className='fa fa-times' />
            ) : (
              <i className='fa fa-bars' />
            )}
          </button>
        </nav>
        <div className='nav-account flexer-sb'>
          <div className='nav-icon-box flexer-c'>
            <i className='fa fa-search' />
          </div>
          <div className='nav-icon-box  flexer-c'>
            <i className='fa fa-bell' />
          </div>
          <div className='nav-icon-box flexer-c'>
            <i className='fa fa-user' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
