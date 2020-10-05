import React from 'react'
import { connect } from 'react-redux';
import {selectMovie} from '../actions/MovieActions';
function MovieList(props) {
    return (
        <>
              <div className="list-container">
                        <h2>Movie List</h2>

                        <ul>
                                    { 
                                    
                                              props.cinema.map((value,index)=>{
                                                  return(
                                                      <div key={value.title}>
                                                               <span>{value.title}</span>
                                                               <button onClick={()=>props.selectMovie(value)}>Click</button>
                                                      </div>
                                                  )
                                              })
                                    } 
                       </ul>

                      
              </div>    
        </>
    )
}


const mapStateToProps = state => ({
    cinema: state.cinema,
    
  });

  const mapDispatchToProps = {
    selectMovie:selectMovie
}

export default connect(mapStateToProps, {selectMovie})(MovieList)
