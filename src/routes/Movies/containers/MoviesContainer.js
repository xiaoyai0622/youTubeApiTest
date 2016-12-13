import { connect } from 'react-redux'
import { fetchMovie,fetchMovieByKeyWord } from '../modules/movies'



import Counter from '../components/Movies'

const mapDispatchToProps = {
  fetchMovie,fetchMovieByKeyWord
}

const mapStateToProps = (state) => ({
  movies : state.movies
})



export default connect(mapStateToProps, mapDispatchToProps)(Counter)
