import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'myvideo',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Series = require('./containers/MyVideoContainer').default
      const reducer = require('./modules/myvideo').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'myvideo', reducer })

      /*  Return getComponent   */
      cb(null, Series)

    /* Webpack named bundle   */
    }, 'myvideo')
  }
})
