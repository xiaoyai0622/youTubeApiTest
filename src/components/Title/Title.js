import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Title.scss'

export const Title = (props) => (
  <div className="title">

    <div className="containers">
      <h3>{props.title?(props.title):("title")}</h3>
    </div>
  </div>
)

export default Title
