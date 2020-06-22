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

    displayDetails = (event) => {
        let index = event.target.value - 1
        this.props.dispatch({type: 'STORE_ID', payload: index});
        this.props.history.push('/details');
    }

   


    render() {
        return (
            <div className="GridContainer">
                <p>MovieList</p>
                {
                    this.props.reduxState.movies.map(item =>
                        <div key={item.id}className="grid-item">
                            <input type="image" key={item.id} src={item.poster} alt={item.title} value={item.id} onClick={this.displayDetails} />
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
