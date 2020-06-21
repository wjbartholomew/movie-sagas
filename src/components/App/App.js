import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList.js';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <MovieList/>
      </div>
    );
  }
}

export default App;
