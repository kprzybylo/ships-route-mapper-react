import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Compass } from "../components/Compass";
import { rotateMarkerOnMap } from "../redux/actions";

function DirectionPicker(props: {
    markerPosition: google.maps.LatLngLiteral,
    rotationAngle: number | null | undefined
}) {
    const dispatch = useDispatch();

    function rotate(event: MouseEvent<HTMLDivElement>): void {
        const target = event.currentTarget;
        const width = target.clientWidth;
        const height = target.clientHeight;

        const x = event.clientX - target.offsetLeft - (width / 2);
        const y = event.clientY - target.offsetTop - (height / 2);
        const currentRotation = Math.atan2(y, x) * (180 / Math.PI) + 90;

        dispatch(rotateMarkerOnMap(props.markerPosition, currentRotation));
    }

    return (
        <Compass rotate={rotate} rotationAngle={props.rotationAngle ? props.rotationAngle : 0} />
    )
}

export default DirectionPicker;