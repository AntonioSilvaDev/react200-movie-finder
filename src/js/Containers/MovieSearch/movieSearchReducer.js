const defaultState = {
    movie: '',
    movieInfo: '',
    error: '',
    lineItems: []
}

export default function MovieSearchReducer( state = defaultState, action){
    const { type, payload } = action;

    switch(type) {
        case 'UPDATE_MOVIE_SEARCH' : {
            return {
                ...state,
                movie: payload.movie
            };
        }

        case 'FETCH_MOVIES_PENDING' : {
            return {
                ...state
            };
        }

        case 'FETCH_MOVIES_FULFILLED' : {
            const title = action.payload.data.Title;
            const year = action.payload.data.Year;
            const rated = action.payload.data.Rated;
            const movies = action.payload.data;

            return {
                movie: '',
                lineItems: action.payload.data,
                // lineItems: [
                //     ...state.lineItems,
                //     { movies }
                // ]
            };
        }

        case 'FETCH_MOVIES_REJECTED' : {
            return {
                ...state,
                movie: '',
                movieInfo: '',
                error: true,
            };
        }

        default: {
            return state
        }
    }
}