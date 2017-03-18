import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Gallery from 'react-grid-gallery';
import AlbumsActions from '../../actions/AlbumsActions';

import logo from './logo.png';
import './style.css';

class App extends Component {  
  constructor(props) {
    super(props);

    //thisApp = this;
    this.index = 0;
    this.isOpen = false;

    this.handleChange = this.handleChange.bind(this);

    AlbumsActions.getAlbums();
  };

  handleChange(val) {
    console.log("handleChange(" + val.value + ")");
    this.props.onChangeGallery(val.value);
  }

  render() {
    console.log("render()");

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dylan Han Photography</h2>
        </div>
        <div className="App-select">
          <Select
            name="select"
            value={this.props.value}
            options={this.props.options}
            onChange={this.handleChange}
          />
        </div> 
        <div className="App-photos">
          <Gallery images={this.props.images}/>
        </div>
      </div>
    );
  }
}

export default App;
