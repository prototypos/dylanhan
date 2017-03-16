import GalleryActionTypes from './GalleryActionTypes';
import GalleryDispatcher from '../dispatchers/GalleryDispatcher';

const Actions = {
  changeGallery(albumId, photos) {
  	console.log("GalleryActions: GalleryDispatcher.dispatch(type: GalleryAtionTypes.CHANGE_GALLERY, " + albumId + ")...");

    GalleryDispatcher.dispatch({
      type: GalleryActionTypes.CHANGE_GALLERY,
      albumId,
      photos
    });
  },
};

export default Actions;