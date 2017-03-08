import React, { Component } from 'react';
import PerfectGrid from 'react-perfect-grid'
import Select from 'react-select';

import logo from './logo.png';
import './style.css';
import "react-select/dist/react-select.css";

// will get the galleries dynamically
var galleries = [
  { value: 'most recent', label: 'Most Recent' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'self portrait', label: 'Self Portrait' },
  { value: 'moment', label: 'Moment' },
  { value: 'genre', label: 'Genre' }
];

// will get the thumbnails dyamically
var thumbnails = [
  {
    url: 'http://files1.porsche.com/filestore/image/multimedia/none/jdp-2016-modelseries-911carrera-editorial-l/normal/3fd16db8-39b8-11e5-8c35-0019999cd470;sL/porsche-normal.jpg',
    link: 'http://files1.porsche.com/filestore/image/multimedia/none/jdp-2016-modelseries-911carrera-editorial-l/normal/3fd16db8-39b8-11e5-8c35-0019999cd470;sL/porsche-normal.jpg'
  },
  { url: 'http://files2.porsche.com/filestore/image/multimedia/none/jdp-2016-modelseries-911carrera-editorial-xl/normal/fde0b87d-3452-11e5-8c35-0019999cd470;sE/porsche-normal.jpg' },
  { url: 'http://files3.porsche.com/filestore/image/multimedia/none/jdp-2016-991-2nd-c2-modelimage-key-features/normal/95bef184-905e-11e6-9f1b-0019999cd470/porsche-normal.jpg' }
];

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      value: "most recent",
      grid: this.getGrid("most recent")
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(val) {
    console.log(val);

    this.setState({
      value: val == null ? null : val.value,
      grid: val == null ? null : this.getGrid(val.value),
    });
    
    console.log(this);
    console.log(this.props);
  }

  // placeholder!!!
  getGrid(val) {
    return (
      <PerfectGrid
        items={thumbnails}
        maxHeight={300}  // maximum height of row
        margins={20}     // margins in pixels
        order={true}     // keep images order or not
      />
    );
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
            name="select"
            value={this.state.value}
            options={galleries}
            onChange={this.handleChange}
          />
        </div> 
        <div className="App-thumbnails">
          {this.state.grid}
        </div>
      </div>
    );
  }
}

export default App;
