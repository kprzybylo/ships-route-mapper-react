import { PayloadAction } from "@reduxjs/toolkit";
import { SetTurnRadiusAction, SET_TURN_RADIUS } from "../actionTypes";
import { SettingsState } from "./storeTypes";

const initialState: SettingsState = {
    turnRadius: 20
};

export default function settingsReducer(state = initialState, action: PayloadAction<SetTurnRadiusAction>) {
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