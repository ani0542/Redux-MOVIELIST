import {MOVIE_SELECTED} from '../actions/types';

const selectedMovieReducer = (state = null, action) => {
    switch(action.type){
        case MOVIE_SELECTED:
           return action.payload

           default:
            return state;
    }

   

}



export default selectedMovieReducer;