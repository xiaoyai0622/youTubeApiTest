import React from 'react'
import Tile from '../../../components/Tile'
import Title from '../../../components/Title'
import './Movie.scss'
import {YOUTUBE_API_KEY} from '../../../utility/key'
import {DropDownMenu, MenuItem, Slider,Dialog}     from 'material-ui';
import AutoCompleteSearch from '../../../components/AutoCompleteSearch'
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {type: 'video', secondSlider: 0,open: false,searchDate:new Date(Date.now()).toISOString(),term:'',fliterDisplay:this.props.movies.movieList.items};
  }

  componentWillMount() {
    this.props.fetchMovie();
  }
  componentWillReceiveProps(nextProps){

      this.setState(
        {fliterDisplay:nextProps.movies.movieList.items}
      )
    

  }

  _onSearchResultsFound(result) {
    console.log(result)
    this.props.fetchMovieByKeyWord(result,this.state.type)

    this.setState({
      term:result
    })

  }


  handleDropChange = (event, index, value) => {
    this.props.fetchMovieByKeyWord(this.state.term,value)
    this.setState({type: value})
  };

  handleSecondSlider = (event, value) => {
    var d = new Date();
    d.setDate(d.getDate()-value);


    var nextList = [];
    var currentList = this.props.movies.movieList.items


currentList.map(function (c) {
  if(moment(c.snippet.publishedAt)<moment(d)){
    nextList.push(c)
  }

})
    this.setState({
      fliterDisplay:nextList
    })

  };

  saveMyVideo(movie){
    this.handleOpen();
    var currentMovies = this.props.movies.myVideo;
    currentMovies.push(movie);
     this.props.saveVideo(currentMovies);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    if (this.state.fliterDisplay) {
      return (
        <div>
          <Title title="Youtube Videos"/>
          <div className="filter-section">
            <AutoCompleteSearch
              apiKey={YOUTUBE_API_KEY}
              placeHolder="Search Youtube"
              maxResults="5"
              callback={this._onSearchResultsFound.bind(this)}
            />

          </div>
          <div className="filter-section">
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <DropDownMenu value={this.state.type} onChange={this.handleDropChange} openImmediately={false} className='drop'>
                <MenuItem value={'channel'} primaryText="channel"/>
                <MenuItem value={'playlist'} primaryText="playlist"/>
                <MenuItem value={'video'} primaryText="video"/>

              </DropDownMenu>

            </MuiThemeProvider>

            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <Slider
                className='slider'
                min={0}
                max={1000}
                step={10}
                defaultValue={0}
                value={this.state.secondSlider}
                onChange={this.handleSecondSlider}
              />
            </MuiThemeProvider>
          </div>

          <div className="movie-list">
            {this.state.fliterDisplay.map(function (movie) {
              return (
                <Tile id={movie.id.videoId} title={movie.snippet.title} img={movie.snippet.thumbnails.medium.url} save={()=>this.saveMyVideo(movie)}/>)
            }.bind(this))}
          </div>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Dialog
            title="Video Saved"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >

          </Dialog>
          </MuiThemeProvider>
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
