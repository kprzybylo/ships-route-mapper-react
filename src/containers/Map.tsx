import { GoogleMap, Marker, MarkerProps, useJsApiLoader } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { MarkersListModel } from '../model/markers-list.model';
import { addMarkerOnMap } from '../redux/actions';
import { getMapCenter, getMarkersList } from '../redux/selectors';
import { GoogleMapsUtil } from '../utils/google-maps.util';

const containerStyle = {
    width: '98%',
    height: '98%',
    margin: '0.5%'
}

export function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ''
    })

    const handleClick = (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            dispatch(addMarkerOnMap({
                position: e.latLng,
                icon: {
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    scale: 3,
                    strokeColor: "#000",
                    fillColor: "#000",
                    fillOpacity: 1,
                    rotation: 0
                }
            }));
        }
    }

    const dispatch = useDispatch();
    const center: google.maps.LatLngLiteral = useSelector(getMapCenter);
    const markers: MarkersListModel = useSelector(getMarkersList);

    return isLoaded ?
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onClick={handleClick}
            options={{
                styles: GoogleMapsUtil.standardMapStyle()
            }}
        >
            {
                markers && Object.values(markers)
                    .map((markerProps: MarkerProps) => <Marker
                        {...markerProps}
                        key={markerProps.position.toString()}
                    />)
            }
        </GoogleMap>
        : <></>;
}