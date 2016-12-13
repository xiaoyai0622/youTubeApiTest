// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import MoviesRoute from './Movies'
import SeriesRoute from './MyVideos'




export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : MoviesRoute,
  childRoutes : [
    MoviesRoute(store),
    SeriesRoute(store)

  ]
})



export default createRoutes
