import React from 'react'
import Tile from '../../../components/Tile'
import Title from '../../../components/Title'

class Series extends React.Component {

  componentWillMount() {
    this.props.fetchSeries();
  }

  render() {

    if (this.props.series) {
      return (
        <div>
          <Title title="Popular Series"/>
          <div className="movie-list">

            {this.props.series.seriesList.map(function (movie) {
              console.log(movie.images['Poster Art'].url)
              return (  <Tile title={movie.title} img={movie.images['Poster Art'].url}/>)

            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="movie-list">
          <Title title="Popular Titles"/>
          <h2>Loading</h2>
        </div>
      );
    }

  }
}


export default Series
