import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header">
    <div className="containers">
      
        <h1 className="header-title">Youtube API TEST</h1>

      <Link to="/movies"><h3 className="header-title sub">Search Videos</h3> </Link>

      <Link to="/myvideo"><h3 className="header-title sub">My Videos</h3> </Link>
    </div>
  </div>
)

export default Header
