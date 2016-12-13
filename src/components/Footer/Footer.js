import React from 'react'
import {IndexLink, Link} from 'react-router'
import appImage from '../../assets/store/app-store.svg'
import playImage from '../../assets/store/play-store.svg'
import windowsImage from '../../assets/store/windows-store.svg'
import facebookImage from '../../assets/social/facebook-white.svg'
import instagramImage from '../../assets/social/instagram-white.svg'
import twitterImage from '../../assets/social/twitter-white.svg'

import './Footer.scss'

export const Footer = () => (
  <div className="footer">
    <div className="containers">
      <div className="footer-nav">
        <a href="#" className="footer-nav-item">Home</a>
        {'|'}
        <a href="#" className="footer-nav-item">Terms and Conditions</a>
        {'|'}
        <a href="#" className="footer-nav-item">Private Policy</a>
        {'|'}
        <a href="#" className="footer-nav-item">Collection Statement</a>
        {'|'}
        <a href="#" className="footer-nav-item">Help</a>
        {'|'}
        <a href="#" className="footer-nav-item">Manage Account</a>


      </div>
      <div className="footer-copyright">
        <span>CopyRight @ 2016 DEMO Streaming. All Rights Reserved</span>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <div className="footer-social-item">
            <img src={facebookImage} className="footer-social-item-img"/>
          </div>
          <div className="footer-social-item">
            <img src={twitterImage} className="footer-social-item-img"/>
          </div>
          <div className="footer-social-item">
            <img src={instagramImage} className="footer-social-item-img"/>
          </div>

        </div>
        <div className="footer-link">
          <div className="footer-link-item">
            <img src={appImage} className="footer-link-item-img"/>
          </div>
          <div className="footer-link-item">
            <img src={playImage} className="footer-link-item-img"/>
          </div>
          <div className="footer-link-item">
            <img src={windowsImage} className="footer-link-item-img ms"/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
