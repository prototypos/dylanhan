import React from 'react';
/*
import Select from 'react-select';
import 'react-select/dist/react-select.css';
*/
import Gallery from 'react-grid-gallery';

import '../index.css';
import logo from './logo.png';
import './style.css';

function AppView(props) {
    var options = props.options.map(function({value, label}) {
            return (
              <option key={value} value={value}>{label}</option>
            );
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dylan Han Photography</h2>
          <select name="select" value={props.value} onChange={props.onChangeGallery}>
            {options}
          </select>        
        </div> 
        <div className="App-photos">
          <Gallery images={props.images}/>
        </div>
      </div>
    );
}
export default AppView;