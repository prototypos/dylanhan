import React, { Component } from 'react';
import Select from 'react-select';

import logo from './logo.png';
import './style.css';
import "react-select/dist/react-select.css";

var thisApp;

var options = [
  { value: 'most recent', label: 'Most Recent' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'self portrait', label: 'Self Portrait' },
  { value: 'moment', label: 'Moment' },
  { value: 'genre', label: 'Genre' }
];

class App extends Component {  
  constructor(props) {
    super(props);
    thisApp = this;
    thisApp.state = {
      value: "most recent"
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  };

  updateState(val) {
    console.log(val);
    console.log(thisApp);
    thisApp.setState({
      value: val == null ? null : val.value
    });
    //this.setValue({value:val.value});
  }

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
            value={this.state.value}
            options={options}
            onChange={this.updateState}
          />
        </div> 
      </div>
    );
  }
}

export default App;
