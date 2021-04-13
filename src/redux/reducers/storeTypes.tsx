import { MarkersList } from "../../model/markers-list";

export interface SettingsState {
    turnRadius: number;
};

export interface MapState {
    center: google.maps.LatLngLiteral;
};

export interface AppStore {
    settings: SettingsState;
    map: MapState;
    markers: MarkersList;
};