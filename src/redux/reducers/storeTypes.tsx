import { MapPosition } from "../../model/map-position";

export interface SettingsState {
    turnRadius: number;
};

export interface MapState {
    center: MapPosition;
}

export interface AppStore {
    settings: SettingsState;
    map: MapState;
};