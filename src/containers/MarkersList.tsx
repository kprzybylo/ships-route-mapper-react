import { MarkerProps } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import MarkerCard from "../components/MarkerCard";
import { MarkersListModel } from "../model/markers-list.model";
import { getMarkersList } from "../redux/selectors";

function MarkersList() {
    const markers: MarkersListModel = useSelector(getMarkersList);

    return (
        <>
            {
                markers && Object.values(markers)
                    .map((markerProps: MarkerProps) => <MarkerCard
                        marker={markerProps}
                        key={markerProps.position.toString()}
                    />)
            }
        </>
    )
}

export default MarkersList;