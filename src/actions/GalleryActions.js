import GalleryActionTypes from './GalleryActionTypes';
import GalleryDispatcher from './dispatchers/GalleryDispatcher';

const Actions = {
  changeGallery(albumId) {
  	console.log("GalleryActions: GalleryDispatcher.dispatch()...");

    GalleryDispatcher.dispatch({
      type: GalleryActionTypes.CHANGE_GALLERY,
      albumId,
    });
  },
};

export default Actions;