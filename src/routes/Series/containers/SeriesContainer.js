import { connect } from 'react-redux'
import { fetchSeries } from '../modules/series'



import Series from '../components/Series'

const mapDispatchToProps = {
  fetchSeries
}

const mapStateToProps = (state) => ({
  series : state.series
})



export default connect(mapStateToProps, mapDispatchToProps)(Series)
