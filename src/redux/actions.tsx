import { MapPosition } from "../model/map-position";
import { Action, SetMapCenter, SetTurnRadiusAction, SET_MAP_CENTER, SET_TURN_RADIUS } from "./actionTypes";

export const setTurnRadius = (turnRadius: number): Action<SetTurnRadiusAction>  => ({
    type: SET_TURN_RADIUS,
    payload: {
        turnRadius
    }
});

export const setMapCenter = (center: MapPosition): Action<SetMapCenter> => ({
    type: SET_MAP_CENTER,
    payload: {
        center
    }
});
