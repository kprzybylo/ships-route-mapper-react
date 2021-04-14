import { MarkersListModel } from "../../model/markers-list.model";

export interface SettingsState {
    turnRadius: number;
};

export interface MapState {
    center: google.maps.LatLngLiteral;
};

export interface AppStore {
    settings: SettingsState;
    map: MapState;
    markers: MarkersListModel;
};