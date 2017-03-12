import $ from 'jquery'; 

var albums = [
];

// will get the images dyamically
var photos = [
];

function getAlbums() {
    $.ajax( {
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=1dbeb8547f8b9ca8f1ec6fd24df973f1&user_id=57788567@N00&format=json&nojsoncallback=1',
      type: 'GET',
      success: function( response ) {
        console.log(response);
        $.each(response.photosets.photoset, function( index, value ) {
          albums.push({value: value.id, label: value.title._content});
        });
/*
        thisApp.setState({
          albums: albums
        });
        thisApp.setState({
          value: albums[0].value
        });
*/
		// TODO...
      }
    });
}

function getPhotos(albumId) {
    $.ajax( {
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1dbeb8547f8b9ca8f1ec6fd24df973f1&user_id=57788567@N00&format=json&nojsoncallback=1& photoset_id=' + albumId,
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
/*
        thisApp.setState({
          images: images
        });
        setTimeout( function() {$(".App-images").scrollTop(0)}, 200 );
*/
		// TODO...
      }
    });
}