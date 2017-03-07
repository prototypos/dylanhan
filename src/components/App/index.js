import React, { Component } from 'react';
import logo from './logo.png';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dylan Han Photography</h2>
        </div>
        <div className="thumbnails">
        </div>
      </div>
    );
  }
}

export default App;
