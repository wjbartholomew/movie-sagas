import React, { Component } from 'react';
import {connect} from 'react-redux';


class MovieDetails extends Component {
    // Renders the entire app on the DOM


    componentDidMount() {
        this.logger();
        this.fetchGenres()
    }

    fetchGenres() {
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.reduxState.detailId })
    }

    logger= () => {
        console.log('props',this.props)
    }

    goBack = () => {
        this.props.history.push('/')
    }
    
    
    render() {
        return (
            <div className="MovieDetails">
                <p>Movie Details</p>
               
                        <img 
                            src={this.props.reduxState.movies[this.props.reduxState.detailId].poster}
                            alt={this.props.reduxState.movies[this.props.reduxState.detailId].title} 
                        /> 

                        
                <p>{this.props.reduxState.movies[this.props.reduxState.detailId].title}</p>
                <p>{this.props.reduxState.movies[this.props.reduxState.detailId].description}</p>

                <p>Genres:</p>
                {
                    this.props.reduxState.genres.map(item =>
                        <p key={item.id}>{item.name}</p>)
                }
                <button>Edit</button>
                <button onClick={this.goBack}>Go Back</button>
                          
                
               
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(MovieDetails);