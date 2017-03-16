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
    switch (action.type) {
      case AlbumsActionTypes.GET_ALBUMS:
        console.log("AlbumsStore: reduce()...");
        console.log(state);
        console.log(action);

        return { "options": action.albums };

      default:
        return state;
    }
  }
}

export default new AlbumsStore();