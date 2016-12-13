import React from 'react'
import placeHolderImg from '../../assets/placeholder.png';
import { IndexLink, Link } from 'react-router'
import './Tile.scss'

export const Title = (props) => (
  <div className="tile">

    <div className="tile-img"><img  className="tile-img-show" src={props.img?(props.img):(placeHolderImg)}/></div>
    <div className="tile-title">{props.title?(props.title):("Title")}</div>
  </div>
)

export default Title
