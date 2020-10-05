import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import selectedMovieReducer from './selectedMovieReducer';


export default combineReducers({
  cinema: movieReducer,
  selectedMovie:selectedMovieReducer    
});