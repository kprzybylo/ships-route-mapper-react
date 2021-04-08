import { Action, SetTurnRadiusAction, SET_TURN_RADIUS } from "./actionTypes";

export const setTurnRadius = (turnRadius: number): Action<SetTurnRadiusAction>  => ({
    type: SET_TURN_RADIUS,
    payload: {
        turnRadius
    }
});