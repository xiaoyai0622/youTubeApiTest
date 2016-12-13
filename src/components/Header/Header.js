import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header">
    <div className="containers">
      <IndexLink to='/' activeClassName='route--active'>
        <h1 className="header-title">DEMO Streaming</h1>
      </IndexLink>

      <div className="header-right">
        <div className="header-right-login">
          Log in
        </div>
        <div className="header-right-trial">
          Start your free trial
        </div>
      </div>
    </div>
  </div>
)

export default Header
