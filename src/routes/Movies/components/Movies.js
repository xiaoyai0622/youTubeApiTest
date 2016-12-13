import React from 'react'
import Tile from '../../../components/Tile'
import Title from '../../../components/Title'
import './Movie.scss'
import {YOUTUBE_API_KEY} from '../../../utility/key'

import AutoCompleteSearch from '../../../components/AutoCompleteSearch'
class Movies extends React.Component {

  componentWillMount() {
    this.props.fetchMovie();
  }
  _onSearchResultsFound(result) {
    console.log(result)
    this.props.fetchMovieByKeyWord(result)
  }
  render() {

    if (this.props.movies) {
      return (
        <div>
          <Title title="Popular Movies"/>


          <AutoCompleteSearch
            apiKey={YOUTUBE_API_KEY}
            placeHolder="Search Youtube"
            maxResults="5"
            callback={this._onSearchResultsFound.bind(this)}
          />
          <div className="movie-list">

            {this.props.movies.movieList.map(function (movie) {
console.log(movie)
              return (  <Tile title={movie.snippet.title} img={movie.snippet.thumbnails.default.url}/>)
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


export default Movies
