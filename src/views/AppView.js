/*
import React from 'react';
import App from '../components/App';
import '../index.css';

function AppView(props) {
  return <App {...props} />
}
*/

import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Gallery from 'react-grid-gallery';

import '../index.css';
import logo from './logo.png';
import './style.css';

function AppView(props) {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dylan Han Photography</h2>
        </div>
        <div className="App-select">
          <Select
            name="select"
            value={props.value}
            options={props.options}
            onChange={props.onChangeGallery}
          />
        </div> 
        <div className="App-photos">
          <Gallery images={props.images}/>
        </div>
      </div>
    );
}
export default AppView;