import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import GalleryActionTypes from '../actions//GalleryActionTypes';
import GalleryDispatcher from '../dispatchers/GalleryDispatcher';

class GalleryStore extends ReduceStore {
  constructor() {
    super(GalleryDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case GalleryActionTypes.CHANGE_Gallery:
        // Do nothing for now, we will add logic here soon!
        console.log("GalleryStore: reduce()");

        return state.set(action.albumId, action.photos)

      default:
        return state;
    }
  }
}

export default new GalleryStore();