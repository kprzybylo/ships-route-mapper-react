import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { getMapCenter } from '../redux/selectors';

const containerStyle = {
    width: '98%',
    height: '98%',
    margin: '0.5%'
}

export function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCD1us5sDntzsYgbU8ScxMHwg766CAgBVM'
    })

    const center = useSelector(getMapCenter);

    return isLoaded ?
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
        >
        </GoogleMap>
        : <></>;
}