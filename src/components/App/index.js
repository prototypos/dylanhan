import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Gallery from 'react-grid-gallery';
import $ from 'jquery'; 

import logo from './logo.png';
import './style.css';

var thisApp;

// will get the galleries dynamically
var albums = [
];

// will get the images dyamically
var images = [
];

class App extends Component {  
  constructor(props) {
    super(props);

    thisApp = this;

    this.index = 0;
    this.isOpen = false;

    this.state = {
      value: null,
      albums: albums,
      images: images
    };
    this.handleChange = this.handleChange.bind(this);

    // get the albums...
    $.ajax( {
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=1dbeb8547f8b9ca8f1ec6fd24df973f1&user_id=57788567@N00&format=json&nojsoncallback=1',
      type: 'GET',
      success: function( response ) {
        console.log(response);
        $.each(response.photosets.photoset, function( index, value ) {
          albums.push({value: value.id, label: value.title._content});
        });
        thisApp.setState({
          albums: albums
        });
        thisApp.setState({
          value: albums[0].value
        });
        thisApp.setImages(albums[0].value);
      }
    });

  };

  handleChange(val) {
    console.log(val);

    this.setState({
      value: val == null ? null : val.value,
    });
    
    this.setImages(val == null ? null : val.value);
  }

  setImages(val) {
    console.log(val);

    $.ajax( {
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1dbeb8547f8b9ca8f1ec6fd24df973f1&user_id=57788567@N00&format=json&nojsoncallback=1& photoset_id=' + val,
      type: 'GET',
      success: function( response ) {
        console.log(response);
        images = [];
        $.each(response.photoset.photo, function( index, value ) {
          images.push({
            src: "https://farm"+value.farm+".staticflickr.com/"+value.server+"/"+value.id+"_"+value.secret+"_b.jpg",
            thumbnail: "https://farm"+value.farm+".staticflickr.com/"+value.server+"/"+value.id+"_"+value.secret+"_q.jpg",
            thumbnailHeight: 150,
            thumbnailWidth: 150
    
          });
        });

        thisApp.setState({
          images: images
        });
        setTimeout( function() {$(".App-images").scrollTop(0)}, 200 );
      }
    });
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
            value={this.state.value}
            options={this.state.albums}
            onChange={this.handleChange}
          />
        </div> 
        <div className="App-images">
          <Gallery images={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;
