import { MapPosition } from "../model/map-position";

export interface Action<T> {
    type: string,
    payload: T
}

export const SET_TURN_RADIUS = "SET_TURN_RADIUS";
export interface SetTurnRadiusAction {
    turnRadius: number
}

export const SET_MAP_CENTER = "SET_MAP_CENTER";
export interface SetMapCenter {
    center: MapPosition
}