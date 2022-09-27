/** @format */

import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-container'>
          <div className='footer-box'>
            <ul className='flex'>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
            <p>
              We may offer several membership packages,
              including memberships offered by third parties
              with their own products and services. We are
              not responsible for the products and services
              provided by such third parties. Some
              membership plans may have different conditions
              and limitations that will be given when you
              sign up or in other communications provided to
              you. 
            </p>
          </div>
          <div className='footer-box'>
            <h3>Follow Us</h3>
            <a href='facebook.com'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='github.com'>
              <i className='fab fa-github'></i>
            </a>
            <a href='instagram.com'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
          <div className='footer-box'>
            <h3>Download at</h3>
            <div className='download'>
              <i class='fa-brands fa-app-store'></i>
              <i class='fa-brands fa-google-play'></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
