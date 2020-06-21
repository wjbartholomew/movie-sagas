import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieList extends Component {
    // Renders the entire app on the DOM

    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIES' })
    }

    logger = () => {
    console.log(this.props.reduxState)
}

    render() {
        return (
            <div className="MovieList">
                <p>MovieList</p>
                this.props.reduxState.


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
