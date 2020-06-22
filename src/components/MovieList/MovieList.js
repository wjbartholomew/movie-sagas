import React, { Component } from 'react';
import './MovieList.css';
import {connect} from 'react-redux';

class MovieList extends Component {
    // Renders the entire app on the DOM

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES' })
        this.logger();
    }

    logger = () => {
    console.log('this.props.reduxState:',this.props.reduxState)
    }

    displayDetails = () => {
        this.props.history.push('/details')
    }

    render() {
        return (
            <div className="GridContainer">
                <p>MovieList</p>
                {
                    this.props.reduxState.movies.map(item =>
                        <div key={item.id}className="grid-item">
                            <img src={item.poster} alt={item.title} onClick={this.displayDetails}/>
                            <p>{item.title}</p>
                        </div>
                    )
                }
            </div>
        ); 
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(MovieList);
