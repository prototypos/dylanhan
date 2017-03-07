import React, { Component } from 'react';
import Select from 'react-select';

import logo from './logo.png';
import './style.css';
import "react-select/dist/react-select.css";

var options = [
  { value: 'most recent', label: 'Most Recent' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'self portrait', label: 'Self Portrait' },
  { value: 'moment', label: 'Moment' },
  { value: 'genre', label: 'Genre' }
];

function logChange(val) {
  console.log("Selected: " + val);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dylan Han Photography</h2>
        </div>
        <div>
          <Select
            name="gallery-selector"
            value="most recent"
            options={options}
            onChange={logChange}
          />
        </div> 
      </div>
    );
  }
}

export default App;
