import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Gallery from 'react-grid-gallery';
//import $ from 'jquery'; 
import AlbumsActions from '../../actions/AlbumsActions';
//import GalleryActions from '../../actions/GalleryActions';

import logo from './logo.png';
import './style.css';
/*
var thisApp;

var albumId;

// will get the galleries dynamically
var albums = [
];

// will get the photos dyamically
var photos = [
];
*/
class App extends Component {  
  constructor(props) {
    super(props);

    //thisApp = this;
    this.index = 0;
    this.isOpen = false;

    this.handleChange = this.handleChange.bind(this);

    AlbumsActions.getAlbums();
/*
    // get the albums...
    $.ajax( {
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=1dbeb8547f8b9ca8f1ec6fd24df973f1&user_id=57788567@N00&format=json&nojsoncallback=1',
      type: 'GET',
      success: function( response ) {
        console.log(response);
        $.each(response.photosets.photoset, function( index, value ) {
          albums.push({value: value.id, label: value.title._content});
        });
        AlbumsActions.getAlbums(albums);
        thisApp.setImages(albums[0].value);
      }
    });
*/
  };

  handleChange(val) {
    console.log("handleChange(" + val.value + ")");
    this.props.onChangeGallery(val.value);
    // this.setImages(val == null ? null : val.value);
  }
/*
  setImages(val) {
    albumId = val;

    $.ajax( {
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1dbeb8547f8b9ca8f1ec6fd24df973f1&user_id=57788567@N00&format=json&nojsoncallback=1& photoset_id=' + val,
      type: 'GET',
      success: function( response ) {
        console.log(response);
        photos = [];
        $.each(response.photoset.photo, function( index, value ) {
          photos.push({
            src: "https://farm"+value.farm+".staticflickr.com/"+value.server+"/"+value.id+"_"+value.secret+"_b.jpg",
            thumbnail: "https://farm"+value.farm+".staticflickr.com/"+value.server+"/"+value.id+"_"+value.secret+"_q.jpg",
            thumbnailHeight: 150,
            thumbnailWidth: 150
    
          });
        });
        GalleryActions.changeGallery(albumId, photos);
        setTimeout( function() {$(".App-photos").scrollTop(0)}, 200 );
      }
    });
  }
*/
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
