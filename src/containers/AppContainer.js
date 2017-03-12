import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import GalleryStore from '../stores/GalleryStore';

function getStores() {
  return [
    GalleryStore,
  ];
}

function getState() {
  return {
    gallery: GalleryStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);