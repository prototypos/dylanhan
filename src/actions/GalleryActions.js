import GalleryActionTypes from './GalleryActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';

const Actions = {
  changeGallery(albumId, photos) {
    AppDispatcher.dispatch({
      type: GalleryActionTypes.CHANGE_GALLERY,
      albumId,
      photos
    });
  },
};

export default Actions;