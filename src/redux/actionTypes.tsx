import { MarkerProps } from "@react-google-maps/api";

export interface Action<T> {
    type: string,
    payload: T
}

export const SET_TURN_RADIUS = "SET_TURN_RADIUS";
export interface SetTurnRadiusAction {
    turnRadius: number
}

export const SET_MAP_CENTER = "SET_MAP_CENTER";
export interface SetMapCenterAction {
    center: google.maps.LatLngLiteral
}

export const ADD_MARKER_ON_MAP = "ADD_MARKER_ON_MAP";
export interface AddMarkerOnMapAction {
    marker: MarkerProps
}