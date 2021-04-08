import { Action, SetTurnRadiusAction, SET_TURN_RADIUS } from "../actionTypes";
import { Settings } from "./storeTypes";

const initialState: Settings = {
    turnRadius: 20
};

export default function(state = initialState, action: Action<SetTurnRadiusAction>) {
    switch (action.type) {
        case SET_TURN_RADIUS: {
            const { turnRadius } = action.payload;

            return {
                ...state,
                turnRadius
            };
        }

        default:
            return state;
    }
}