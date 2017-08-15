import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Show from './recipeshow/show.js'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Show/>
      </div>
    );
  }
}

export default App;
