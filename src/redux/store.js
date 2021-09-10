import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../redux/reducer';
import axios from "axios";
import { fetchMoviesFailure, fetchMoviesRequest, fetchMoviesSuccess } from "./actions";

export const fetchMovies = () => {
    let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c66ccdc6c41eb551ba9ec6742fe75be2';
    // let url = 'https://api.themoviedb.org/3/movie/popular?api_key=c66ccdc6c41eb551ba9ec6742fe75be2&language=en-US';    
    // c66ccdc6c41eb551ba9ec6742fe75be2
    // ( Number > 0 ) 
    // ? url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c66ccdc6c41eb551ba9ec6742fe75be2&with_genres=${Number}` 
    // : url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c66ccdc6c41eb551ba9ec6742fe75be2';
    return (dispatch) => {
        dispatch(fetchMoviesRequest);
        // axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c66ccdc6c41eb551ba9ec6742fe75be2')
        // axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c66ccdc6c41eb551ba9ec6742fe75be2&with_genres=28')
        axios.get(url)
        .then( response => {
            const movies = response.data.results;
            dispatch(fetchMoviesSuccess(movies));
            console.log( response.data, movies );
        }).catch( error => { dispatch(fetchMoviesFailure(error.message)); } )
    }
}

/*export const spcMovie = (trgStr, moviesData, trgMovie, setTrgMovie) => {
    // fetchMovies();        
    setTrgMovie([
        ...moviesData.filter( (movie, i) => {
            return movie.title ===  trgStr;                
        })
    ]);        

    console.log( trgMovie );
}*/

export const store = createStore(rootReducer, applyMiddleware(thunk));