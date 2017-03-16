// import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import GalleryActionTypes from '../actions//GalleryActionTypes';
import GalleryDispatcher from '../dispatchers/GalleryDispatcher';

class GalleryStore extends ReduceStore {
  constructor() {
    super(GalleryDispatcher);
  }

  getInitialState() {
    return { "value": null, "images":[]};
  }

  reduce(state, action) {
    switch (action.type) {
      case GalleryActionTypes.CHANGE_GALLERY:
        console.log("GalleryStore: reduce()...");
        console.log(state);
        console.log(action);

        return {  "value": action.albumId, "images": action.photos };

      default:
        return state;
    }
  }
}

export default new GalleryStore();