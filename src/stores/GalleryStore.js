// import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import GalleryActionTypes from '../actions//GalleryActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';

class GalleryStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return { "value": null, "images":[]};
  }

  reduce(state, action) {
    console.log("GalleryStore: reduce()...");
    console.log(state);
    console.log(action);

    switch (action.type) {
      case GalleryActionTypes.CHANGE_GALLERY:
        return {  "value": action.albumId, "images": [] };

      case GalleryActionTypes.SET_GALLERY:
        return {  "value": action.albumId, "images": action.photos };

      default:
        return state;
    }
  }
}

export default new GalleryStore();