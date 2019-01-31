import axios from 'axios';

export function updateMovieSearch(movie){
    return {
        type: 'UPDATE_MOVIE_SEARCH',
        payload: { movie }
    }
}

export function fetchMovies(value){
    return {
        type: 'FETCH_MOVIES',
        payload: axios.get('/api', {params: {s: `${value}` }})
    }
}