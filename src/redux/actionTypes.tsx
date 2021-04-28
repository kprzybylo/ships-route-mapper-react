import { MarkerProps } from "@react-google-maps/api";
import { PayloadAction } from "@reduxjs/toolkit";

export const SET_TURN_RADIUS = "SET_TURN_RADIUS";
export interface SetTurnRadiusAction {
    turnRadius: number
}

export const SET_MAP_CENTER = "SET_MAP_CENTER";
export interface SetMapCenterAction {
    center: google.maps.LatLngLiteral
}

export type MapActions = PayloadAction<SetMapCenterAction>;

export const ADD_MARKER_ON_MAP = "ADD_MARKER_ON_MAP";
export interface AddMarkerOnMapAction {
    marker: MarkerProps
}

export const REMOVE_MARKER_FROM_MAP = "REMOVE_MARKER_FROM_MAP";
export interface RemoveMarkerFromMapAction {
    markerPosition: google.maps.LatLngLiteral
}

export const ROTATE_MARKER_ON_MAP = "ROTATE_MARKER_ON_MAP";
export interface RotateMarkerOnMapAction {
    markerPosition: google.maps.LatLngLiteral,
    newDirection: number
}

export type MarkerActions = PayloadAction<AddMarkerOnMapAction> | PayloadAction<RemoveMarkerFromMapAction>
    | PayloadAction<RotateMarkerOnMapAction>;