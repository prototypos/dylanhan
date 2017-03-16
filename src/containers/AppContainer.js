import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import AlbumsStore from '../stores/AlbumsStore';
import GalleryStore from '../stores/GalleryStore';
import AlbumsActions from '../actions/AlbumsActions';
import GalleryActions from '../actions/GalleryActions';

function getStores() {
  return [
    AlbumsStore,
    GalleryStore,
  ];
}

function getState() {
  console.log("AppContainer.getState()");

  return {
  	options: AlbumsStore.getState().options,
  	value: GalleryStore.getState().value,
    images: GalleryStore.getState().images,
    onGetAlbums: AlbumsActions.getAlbums,
    onChangeGallery: GalleryActions.changeGallery
  };
}

export default Container.createFunctional(AppView, getStores, getState);