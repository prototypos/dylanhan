import React, { Component } from 'react';
import Select from 'react-select';

import logo from './logo.png';
import './style.css';
import "react-select/dist/react-select.css";

// should get the galleries dynamically
var galleries = [
  { value: 'most recent', label: 'Most Recent' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'self portrait', label: 'Self Portrait' },
  { value: 'moment', label: 'Moment' },
  { value: 'genre', label: 'Genre' }
];

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      value: "most recent",
      children: this.getThumbnails("most recent")
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(val) {
    console.log(val);

    this.setState({
      value: val == null ? null : val.value,
      children: val == null ? null : this.getThumbnails(val.value),
    });
    
    console.log(this);
    console.log(this.props);
  }

  // placeholder!!!
  getThumbnails(val) {
    return ([<Select key={val} value={val} options={galleries} />]);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dylan Han Photography</h2>
        </div>
        <div className="App-select">
          <Select
            name="gallery-selector"
            value={this.state.value}
            options={galleries}
            onChange={this.handleChange}
          />
        </div> 
        <div className="App-thumbnails">
          {this.state.children}
        </div>
      </div>
    );
  }
}

export default App;
