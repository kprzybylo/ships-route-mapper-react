import { MarkerProps } from "@react-google-maps/api";
import { Action, AddMarkerOnMapAction, ADD_MARKER_ON_MAP, SetMapCenterAction, SetTurnRadiusAction, SET_MAP_CENTER, SET_TURN_RADIUS } from "./actionTypes";

export const setTurnRadius = (turnRadius: number): Action<SetTurnRadiusAction>  => ({
    type: SET_TURN_RADIUS,
    payload: {
        turnRadius
    }
});

export const setMapCenter = (center: google.maps.LatLngLiteral): Action<SetMapCenterAction> => ({
    type: SET_MAP_CENTER,
    payload: {
        center
    }
});

export const addMarkerOnMap = (marker: MarkerProps): Action<AddMarkerOnMapAction> => ({
    type: ADD_MARKER_ON_MAP,
    payload: {
        marker
    }
});
