import React from 'react';

class MovieDetailContainer extends React.Component {
    constructor(props){
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    render(){
        const { lineItems } = this.props;
        const movie = lineItems.filter(lineItem => lineItem.imdbID == this.props.match.params.id);
        const noImageUrl = 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg';
        
        return (
            <div className='container'>
                <div className='jumbotron mt-3 p-4'>
                    <h1 className='display-4 mb-3 text-center'>Movie Details</h1>
                    <a href='#' className='btn btn-primary' onClick={this.goBack}>Go Back</a>
                </div>
                <div className='row mt-2 row-no-gutters'>
                    <div className='col-sm-4'>
                        <img className='img-fluid rounded' src={ movie[0].Poster != "N/A" ? movie[0].Poster : noImageUrl } alt="..."/>
                    </div>
                    <div className='col-sm-8'>
                        <div className="card">
                            <h3 className='card-header'>More Info</h3>
                            <div className='card-body'>
                                <h4 className='card-title mb-2'>{ movie[0].Title != "N/A" ? movie[0].Title : 'No Title Available' }</h4>
                                <span className='badge badge-success'>{ movie[0].Released != "N/A" ? movie[0].Released : 'No Release Data Info' }</span>
                                <span className='badge badge-primary'>{ movie[0].Runtime != "N/A" ? movie[0].Runtime : 'No Runtime Info' }</span>
                                <span className='badge badge-danger'>{ movie[0].Genre != "N/A" ? movie[0].Genre : 'No Genre Available' }</span>
                                <p className='my-3'>{ movie[0].Plot != "N/A" ? movie[0].Plot : 'No Plot Description Available' }</p>
                                <p className='mb-0'><span className='font-weight-bold'>Metascore: </span>{ movie[0].Metascore != "N/A" ? movie[0].Metascore : 'No Metascore Available' }</p>
                                <p className='mb-0'><span className='font-weight-bold'>IMDB: </span>{ movie[0].imdbRating != "N/A" ? movie[0].imdbRating : 'No IMDB Rating Available' }</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MovieDetailContainer;