import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store){
    return {
        lineItems: store.search.lineItems
    }
}

export default connect (mapStoreToProps)(MovieDetailContainer);