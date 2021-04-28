import { MarkerProps } from "@react-google-maps/api";
import { MarkersListModel } from "../../model/markers-list.model";
import {
    AddMarkerOnMapAction,
    ADD_MARKER_ON_MAP,
    MarkerActions,
    RemoveMarkerFromMapAction,
    REMOVE_MARKER_FROM_MAP,
    RotateMarkerOnMapAction,
    ROTATE_MARKER_ON_MAP
} from "../actionTypes";

function positionAsString(position: google.maps.LatLngLiteral | google.maps.LatLng): string {
    if (position instanceof google.maps.LatLng) {
        return `${position.lat()};${position.lng()}`;
    }

    return `${position.lat};${position.lng}`;
}

export default function markersReducer(state: MarkersListModel = {}, action: MarkerActions) {
    switch (action.type) {
        case ADD_MARKER_ON_MAP: {
            let { marker } = (action.payload as AddMarkerOnMapAction);

            return {
                ...state,
                [positionAsString(marker.position)]: marker
            }
        }

        case REMOVE_MARKER_FROM_MAP: {
            let { markerPosition } = (action.payload as RemoveMarkerFromMapAction);

            return Object.fromEntries(
                Object.entries(state)
                    .filter(([key, value]: [string, MarkerProps]) => key !== positionAsString(markerPosition))
            );
        }

        case ROTATE_MARKER_ON_MAP: {
            let { markerPosition, newDirection } = (action.payload as RotateMarkerOnMapAction); 
            const markerId = positionAsString(markerPosition);            

            return {
                ...state,
                [markerId]: {
                    ...state[markerId],
                    icon: {
                        ...(state[markerId].icon as google.maps.Symbol),
                        rotation: newDirection
                    }
                }
            }
        }

        default:
            return state
    }
}