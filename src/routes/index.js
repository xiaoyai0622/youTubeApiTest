// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import MoviesRoute from './Movies'
import SeriesRoute from './Series'




export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    MoviesRoute(store),
    SeriesRoute(store)

  ]
})



export default createRoutes
