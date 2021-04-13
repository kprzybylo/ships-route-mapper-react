import { GoogleMap, Marker, MarkerProps, useJsApiLoader } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { MarkersList } from '../model/markers-list';
import { addMarkerOnMap } from '../redux/actions';
import { getMapCenter, getMarkersList } from '../redux/selectors';

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
                    url: "/icons/compass.svg",
                    scaledSize: new google.maps.Size(15, 15)
                }
            }));
        }
    }

    const dispatch = useDispatch();
    const center: google.maps.LatLngLiteral = useSelector(getMapCenter);
    const markers: MarkersList = useSelector(getMarkersList);
    console.log(markers);

    return isLoaded ?
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onClick={handleClick}
        >
            {
                markers && Object.values(markers)
                    .map((markerProps: MarkerProps) => <Marker
                        {...markerProps}
                    />)
            }
        </GoogleMap>
        : <></>;
}