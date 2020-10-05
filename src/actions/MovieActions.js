import {MOVIE_SELECTED} from './types';

export const selectMovie=(movie)=>{
    return{
        type:MOVIE_SELECTED,
        payload:movie
    }
}