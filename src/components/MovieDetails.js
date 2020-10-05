import React from 'react'
import { connect } from 'react-redux';
import {selectMovie} from '../actions/MovieActions';
function MovieDetails(props) {
    if(!props.selectedMovie){
        return (
            <div className="details-container" style={{width: '70%'}}>
                <h2>Movie</h2>
                <div className="properties">
                    <p>Select Movie</p>
                </div>
            </div>
            
        )  
    }
    else{
        return (
        
            <div className="details-container">
                <h2>Movie</h2>
                <div className="properties">
                    <p>Title: {props.selectedMovie.title}</p>
                    <p>Release Date: {props.selectedMovie.releaseDate}</p>
                    <p>Rating: {props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedMovie: state.selectedMovie,
    
  });

export default connect(mapStateToProps, {selectMovie})(MovieDetails)