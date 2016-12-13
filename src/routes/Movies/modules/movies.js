// ------------------------------------
// Constants
// ------------------------------------

import Data from '!json!../../../feed/sample.json';
import {YOUTUBE_API_KEY} from '../../../utility/key'
import {YOUTUBE_API} from '../../../utility/api'
import _ from 'lodash'
import YoutubeFinder        from 'youtube-finder';
import YTSearch from 'youtube-api-search'


export const FETCH_MOVIE_START = 'FETCH_MOVIE_START'

export const FETCH_MOVIE_DONE = 'FETCH_MOVIE_DONE'

export const SAVE_VIDEO='SAVE_VIDEO'
export const FILTER_LIST='FILTER_LIST'

// ------------------------------------
// Actions
// ------------------------------------

let YoutubeClient  = YoutubeFinder.createClient({ key: YOUTUBE_API_KEY });
export function fetchMovieStart(value = 1) {
  return {
    type: FETCH_MOVIE_START
  }
}

export function filterList(list) {
  return {
    type: FILTER_LIST,
    movies: list
  }
}


export function fetchMovieDone(movies = []) {
  return {
    type: FETCH_MOVIE_DONE,
    movies: movies
  }
}

export function saveVideo(videos){
  return{
    type:SAVE_VIDEO,
    videos:videos

  }
}

export function fetchMovie() {
  return (dispatch, getState) => {
    dispatch(fetchMovieStart());
    const
      self = this,
      params = {
        part: 'id,snippet',
        type: 'video',
        q: '',
        maxResults: '30'
      }

    YoutubeClient.search(params, function (error, results) {
      if (error) return console.log(error);
      dispatch(fetchMovieDone(results));
    });



  }
}

export function fetchMovieByKeyWord(term,type) {
  return (dispatch, getState) => {
    dispatch(fetchMovieStart());
    const
      self = this,
      params = {
        part: 'id,snippet',
        q: term,
        maxResults: '30',
        type:type
      }

    YoutubeClient.search(params, function (error, results) {
      if (error) return console.log(error);
      dispatch(fetchMovieDone(results));
    });
  }
}

export const actions = {
  fetchMovie
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_MOVIE_START]: (state, action) =>{
    return ({...state,fetching: true, movieList: []})
  },
  [FETCH_MOVIE_DONE]: (state, action) => {
    return ({...state,fetching: false, movieList: action.movies})
  },
  [SAVE_VIDEO]:  (state, action) => {
    return ({...state, myVideo: action.videos})
  },
  [FILTER_LIST]:  (state, action) => {
    return ({...state, movieList: action.movies})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  movieList: [],
  myVideo:[]
}
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
