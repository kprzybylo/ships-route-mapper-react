import { MarkerProps } from "@react-google-maps/api";
import { PayloadAction } from "@reduxjs/toolkit";
import { 
    AddMarkerOnMapAction, 
    ADD_MARKER_ON_MAP, 
    SetMapCenterAction, 
    SetTurnRadiusAction, 
    SET_MAP_CENTER, 
    SET_TURN_RADIUS,
    REMOVE_MARKER_FROM_MAP,
    RemoveMarkerFromMapAction,
    ROTATE_MARKER_ON_MAP,
    RotateMarkerOnMapAction
} from "./actionTypes";

export const setTurnRadius = (turnRadius: number): PayloadAction<SetTurnRadiusAction>  => ({
    type: SET_TURN_RADIUS,
    payload: {
        turnRadius
    }
});

export const setMapCenter = (center: google.maps.LatLngLiteral): PayloadAction<SetMapCenterAction> => ({
    type: SET_MAP_CENTER,
    payload: {
        center
    }
});

export const addMarkerOnMap = (marker: MarkerProps): PayloadAction<AddMarkerOnMapAction> => ({
    type: ADD_MARKER_ON_MAP,
    payload: {
        marker
    }
});

export const removeMarkerFromMap = (markerPosition: google.maps.LatLngLiteral): PayloadAction<RemoveMarkerFromMapAction> => ({
    type: REMOVE_MARKER_FROM_MAP,
    payload: {
        markerPosition
    }
});

export const rotateMarkerOnMap = (markerPosition: google.maps.LatLngLiteral, newDirection: number): PayloadAction<RotateMarkerOnMapAction> => ({
    type: ROTATE_MARKER_ON_MAP,
    payload: {
        markerPosition,
        newDirection
    }
});
