import { Card, CardContent, Grid, IconButton, Typography } from "@material-ui/core";
import { Delete, MyLocation } from "@material-ui/icons";
import { MarkerProps } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import DirectionPicker from "../containers/DirectionPicker";
import { removeMarkerFromMap, setMapCenter } from "../redux/actions";
import { GoogleMapsUtil } from "../utils/google-maps.util";
import { MathUtil } from "../utils/math.util";

function MarkerCard(props: {
    marker: MarkerProps
}) {
    const dispatch = useDispatch();
    const position = GoogleMapsUtil.toLatLngLiteral(props.marker.position);

    return (
        <Card className="m-3 bg-light">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid
                        item xs={6} spacing={2} container
                        direction="column" justify="center"
                    >
                        <Grid item>
                            <Typography>
                                {`Lat: ${MathUtil.round(position.lat, 6)}`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                {`Lng: ${MathUtil.round(position.lng, 6)}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item xs={2} container spacing={0}
                        justify="center" alignItems="center"
                    >
                        <Grid item>
                            <IconButton
                                className="text-primary"
                                onClick={() => dispatch(setMapCenter(position))}
                            >
                                <MyLocation />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                className="text-danger"
                                onClick={() => dispatch(removeMarkerFromMap(position))}
                            >
                                <Delete />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <DirectionPicker
                            markerPosition={position}
                            rotationAngle={(props.marker.icon as google.maps.Symbol).rotation}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MarkerCard;