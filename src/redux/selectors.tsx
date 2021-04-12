import { AppStore } from "./reducers/storeTypes";

export const getTurnRadius = (store: AppStore) => store && store.settings
    ? store.settings.turnRadius
    : 0;

export const getMapCenter = (store: AppStore) => store && store.map
    ? store.map.center
    : {lat: 0, lng: 0};

export const getMarkersList = (store: AppStore) => store && store.markers;