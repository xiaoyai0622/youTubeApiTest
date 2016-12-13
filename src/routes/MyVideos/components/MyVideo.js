import React from 'react'
import Tile from '../../../components/Tile'
import Title from '../../../components/Title'

class MyVideo extends React.Component {

  componentWillMount() {
  }

  render() {
console.log(this.props.movies)
    if (this.props.movies.myVideo) {
      return (
        <div>
          <Title title="My Videos"/>

          <div className="movie-list">

            {this.props.movies.myVideo.length==0?(
              <h1>The saved list is empty</h1>
            ):(this.props.movies.myVideo.map(function (movie) {
              return (
                <Tile id={movie.id.videoId} title={movie.snippet.title} img={movie.snippet.thumbnails.medium.url} isMine={true} save={()=>this.saveMyVideo(movie)}/>)
            }.bind(this)))

              }
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


export default MyVideo
