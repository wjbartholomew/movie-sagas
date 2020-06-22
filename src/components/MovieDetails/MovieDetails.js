import React, { Component } from 'react';
import {connect} from 'react-redux';


class MovieDetails extends Component {
    // Renders the entire app on the DOM


    componentDidMount() {
        this.logger();
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