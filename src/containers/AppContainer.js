import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import GalleryStore from '../stores/GalleryStore';
import GalleryActions from '../actions/GalleryActions';

function getStores() {
  return [
    GalleryStore,
  ];
}

function getState() {
  console.log("AppContainer.getState()");

  return {
  	value: GalleryStore.getState().value,
    images: GalleryStore.getState().images,
    onChangeGallery: GalleryActions.changeGallery
  };
}

export default Container.createFunctional(AppView, getStores, getState);