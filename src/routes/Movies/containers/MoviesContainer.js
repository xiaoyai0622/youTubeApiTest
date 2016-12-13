import { connect } from 'react-redux'
import { fetchMovie,fetchMovieByKeyWord,saveVideo,filterList } from '../modules/movies'



import Counter from '../components/Movies'

const mapDispatchToProps = {
  fetchMovie,fetchMovieByKeyWord,saveVideo,filterList
}

const mapStateToProps = (state) => ({
  movies : state.movies
})



export default connect(mapStateToProps, mapDispatchToProps)(Counter)
