import { MarkersList } from "../../model/markers-list";
import { Action, AddMarkerOnMapAction, ADD_MARKER_ON_MAP } from "../actionTypes";

export default function markersReducer(state = {}, action: Action<AddMarkerOnMapAction>) {
    switch (action.type) {
        case ADD_MARKER_ON_MAP: {
            let { marker } = action.payload;

            let markerId = `${marker.position.lat};${marker.position.lng}`;
            if (marker.position instanceof google.maps.LatLng) {
                markerId = `${marker.position.lat()};${marker.position.lng()}`;
            }

            return {
                ...state,
                [markerId]: marker
            }
        }

        default:
            return state
    }
}