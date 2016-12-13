import React from 'react'
import placeHolderImg from '../../assets/placeholder.png';
import {IndexLink, Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import './Tile.scss'
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
export const Title = (props) => (
  <div className="tile">

    <div className="tile-img"><img className="tile-img-show" src={props.img?(props.img):(placeHolderImg)}/></div>
    <div className="tile-title">{props.title ? (props.title) : ("Title")}</div>
    {props.isMine ? (<div></div>) : (<MuiThemeProvider muiTheme={getMuiTheme()}>
      <RaisedButton onClick={props.save} label="Save" primary={true}/>
    </MuiThemeProvider>)}


  </div>
)

export default Title
