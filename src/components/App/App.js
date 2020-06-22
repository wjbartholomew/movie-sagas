import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import MovieList from '../MovieList/MovieList.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';
import MovieEdit from '../MovieEdit/MovieEdit.js';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={MovieList} />
          <Route path="/details" component={MovieDetails} />
          <Route path="/edit" component={MovieEdit} />
        </Router>
      </div>
    );
  }
}

export default App;
