import { Action, SetMapCenterAction, SET_MAP_CENTER } from "../actionTypes";
import { MapState } from "./storeTypes";

const initialState: MapState = {
    center: { 
        lat: 52.328006, 
        lng: 19.579827 
    }
}

export default function mapReducer(state = initialState, action: Action<SetMapCenterAction>) {
    switch (action.type) {
        case SET_MAP_CENTER: {
            const { center } = action.payload;

            return {
                ...state,
                center
            };
        }

        default:
            return state;
    }
}