// import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import AlbumsActionTypes from '../actions//AlbumsActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';

class AlbumsStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return { "options": null };
  }

  reduce(state, action) {
    console.log("AlbumsStore: reduce()...");
    console.log(state);
    console.log(action);
  
    switch (action.type) {
      case AlbumsActionTypes.GET_ALBUMS:
        return state;

      case AlbumsActionTypes.SET_ALBUMS:
        return { "options": action.albums };
        
      default:
        return state;
    }
  }
}

export default new AlbumsStore();