// ------------------------------------
// Constants
// ------------------------------------

import Data from '!json!../../../feed/sample.json';
import {YOUTUBE_API_KEY} from '../../../utility/key'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'


export const FETCH_MOVIE_START = 'FETCH_MOVIE_START'

export const FETCH_MOVIE_DONE = 'FETCH_MOVIE_DONE'
// ------------------------------------
// Actions
// ------------------------------------
export function fetchMovieStart (value = 1) {
  return {
    type    : FETCH_MOVIE_START,
  }
}


export function fetchMovieDone (movies = []) {
  return {
    type    : FETCH_MOVIE_DONE,
    movies  : movies
  }
}


export function fetchMovie(){
  return (dispatch, getState) => {
    dispatch(fetchMovieStart());

    YTSearch({key:YOUTUBE_API_KEY,term:''},function (data) {
      dispatch(fetchMovieDone(data));
    })


  }
}

export function fetchMovieByKeyWord(term){
  return (dispatch, getState) => {
    dispatch(fetchMovieStart());

    YTSearch({key:YOUTUBE_API_KEY,term:term},function (data) {
      dispatch(fetchMovieDone(data));
    })


  }
}

export const actions = {
  fetchMovie
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_MOVIE_START] : (state, action) => ({fetching:true, movieList:[]}),
  [FETCH_MOVIE_DONE] : (state, action) => ({fetching:false, movieList:action.movies})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching:false,
  movieList:[]
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
