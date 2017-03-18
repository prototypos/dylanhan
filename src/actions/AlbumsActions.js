import AlbumsActionTypes from './AlbumsActionTypes';
import GalleryActions from './GalleryActions';
import AppDispatcher from '../dispatchers/AppDispatcher';
import $ from 'jquery';

const Actions = {
  getAlbums() {
  	console.log("AlbumActions.getAlbums: dispatch(GET_ALBUMS)");
    AppDispatcher.dispatch({
      type: AlbumsActionTypes.GET_ALBUMS,
    });

    // get the albums...
    $.ajax( {
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=1dbeb8547f8b9ca8f1ec6fd24df973f1&user_id=57788567@N00&format=json&nojsoncallback=1',
      type: 'GET',
      success: function( response ) {
        console.log(response);
    
    	var albums = [];

        $.each(response.photosets.photoset, function( index, value ) {
          albums.push({value: value.id, label: value.title._content});
        });

  		console.log("AlbumActions.getAlbums: dispatch(SET_ALBUMS)");
    	AppDispatcher.dispatch({
      		type: AlbumsActionTypes.SET_ALBUMS,
      		albums
    	});

    	if (albums.length) {
    		var albumId = albums[0].value;

  			console.log("AlbumActions.getAlbums: GalleryActions.changeGallery()");
    		GalleryActions.changeGallery(albumId);
    	}
/* 
        AlbumsActions.getAlbums(albums);
        thisApp.setImages(albums[0].value);
*/
      }
    });

  },
};

export default Actions;