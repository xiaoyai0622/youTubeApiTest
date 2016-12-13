// ------------------------------------
// Constants
// ------------------------------------

import Data from '!json!../../../feed/sample.json';

import _ from 'lodash'
export const FETCH_SERIES_START = 'FETCH_SERIES_START'

export const FETCH_SERIES_DONE = 'FETCH_SERIES_DONE'
// ------------------------------------
// Actions
// ------------------------------------
export function fetchSeriesStart (value = 1) {
  return {
    type    : FETCH_SERIES_START,
  }
}


export function fetchSeriesDone (series = []) {
  return {
    type    : FETCH_SERIES_DONE,
    series  : series
  }
}


export function fetchSeries(){
  return (dispatch, getState) => {
    dispatch(fetchSeriesStart());

    var series= _.filter(Data.entries,{'programType':'series'})
    var sorted= _.sortBy(series,['releaseYear'])
    var final = _.dropRight(sorted,sorted.length-21)
    console.log(final);
    dispatch(fetchSeriesDone(final));

  }
}

export const actions = {
  fetchSeries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_SERIES_START] : (state, action) => ({fetching:true, seriesList:[]}),
  [FETCH_SERIES_DONE] : (state, action) => ({fetching:false, seriesList:action.series})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching:false,
  seriesList:[]
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
