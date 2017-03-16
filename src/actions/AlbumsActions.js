import AlbumsActionTypes from './AlbumsActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';

const Actions = {
  getAlbums(albums) {
    AppDispatcher.dispatch({
      type: AlbumsActionTypes.GET_ALBUMS,
      albums
    });
  },
};

export default Actions;