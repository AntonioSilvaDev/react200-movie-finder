import { combineReducers } from 'redux';
import movieSearchReducer from './Containers/MovieSearch/movieSearchReducer';

const rootReducer = combineReducers({
    search: movieSearchReducer
});

export default rootReducer;