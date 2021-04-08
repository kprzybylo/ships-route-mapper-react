export interface Action<T> {
    type: string,
    payload: T
}

export const SET_TURN_RADIUS = "SET_TURN_RADIUS";
export interface SetTurnRadiusAction {
    turnRadius: number
}