import GalleryActionTypes from './GalleryActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';
import $ from 'jquery';

const Actions = {
  changeGallery(evt) {
    console.log("GalleryActions.changeGallery()...");
    console.log(evt.target.value);

    var albumId = evt.target.value;
    
  	console.log("GalleryActions.changeGallery: dispatch(CHANGE_GALLERY)");
    AppDispatcher.dispatch({
      type: GalleryActionTypes.CHANGE_GALLERY,
      albumId
    });

    // get the photos...
    $.ajax( {
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1dbeb8547f8b9ca8f1ec6fd24df973f1&user_id=57788567@N00&format=json&nojsoncallback=1& photoset_id=' + albumId,
      type: 'GET',
      success: function( response ) {
      	var photos = []
        console.log(response);
        
        $.each(response.photoset.photo, function( index, value ) {
          photos.push({
            src: "https://farm"+value.farm+".staticflickr.com/"+value.server+"/"+value.id+"_"+value.secret+"_b.jpg",
            thumbnail: "https://farm"+value.farm+".staticflickr.com/"+value.server+"/"+value.id+"_"+value.secret+"_q.jpg",
            thumbnailHeight: 150,
            thumbnailWidth: 150
    
          });
        });
  		console.log("GalleryActions.changeGallery: dispatch(SET_GALLERY)");
    	AppDispatcher.dispatch({
      		type: GalleryActionTypes.SET_GALLERY,
      		albumId,
      		photos
    	});
      }
    });

  },
};

export default Actions;