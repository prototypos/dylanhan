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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Dylan Han Photography</h3>
          <select name="select" value={props.value} onChange={e => props.onChangeGallery(e.target.value)}>
            {props.options.map(({value, label}) => (
                <option key={value} value={value}>{label}</option>
            ))}
          </select>        
        </div> 
        <div className="App-photos">
          <Gallery images={props.images}/>
        </div>
      </div>
    );
}
export default AppView;