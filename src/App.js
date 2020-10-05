import React from 'react'
import {Provider} from 'react-redux';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import store from './store';
function App() {
    return (
        <>
            
                          
             <Provider store={store}>
            {/* <div className="App"> */}
                   <h1>Redux Movies</h1>
                        <div className="container">
                            <MovieList />
                            <MovieDetails />
                         </div>
            {/* </div> */}
            </Provider>
        </>
    )
}

export default App
