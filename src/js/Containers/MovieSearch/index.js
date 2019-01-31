import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store){
    return {
        movie: store.search.movie,
        lineItems: store.search.lineItems
    }
}

export default connect (mapStoreToProps)(MovieSearchContainer);