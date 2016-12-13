import { connect } from 'react-redux'
import { fetchSeries } from '../modules/myvideo'



import MyVideo from '../components/MyVideo'

const mapDispatchToProps = {
  fetchSeries
}

const mapStateToProps = (state) => ({
  movies : state.movies
})



export default connect(mapStateToProps, mapDispatchToProps)(MyVideo)
