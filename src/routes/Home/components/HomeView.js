import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import Title from '../../../components/Title'
import './HomeView.scss'
import { IndexLink, Link } from 'react-router'
export const HomeView = () => (
  <div className="containers">
    <Title  title="Welcome Aboard"/>
   <div className="content">
     <IndexLink to="/series">
      <div className="page-link">

        <div className="page-link-img"><h3>My List</h3> </div>
        <div className="page-link-title"> My Videos</div>
      </div>
   </IndexLink>
     <IndexLink to="/movies">
     <div className="page-link">
       <div className="page-link-img"><h3>MOVIES</h3> </div>
       <div className="page-link-title"> Popular Movie</div>
     </div>
       </IndexLink>
   </div>

  </div>
)

export default HomeView
