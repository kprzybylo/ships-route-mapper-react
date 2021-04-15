import { Card, CardContent, Grid, IconButton, Typography } from "@material-ui/core";
import { Delete, MyLocation } from "@material-ui/icons";
import { MarkerProps } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { removeMarkerFromMap } from "../redux/actions";
import { GoogleMapsUtil } from "../utils/google-maps.util";

function MarkerCard(props: {
    marker: MarkerProps
}) {
    const dispatch = useDispatch();
    const position = GoogleMapsUtil.toLatLngLiteral(props.marker.position);

    return (
        <Card className="m-3 bg-light">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8} container direction="column">
                        <Grid item>
                            <Typography>
                                {`Lat: ${position.lat}`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                {`Lng: ${position.lng}`}
                            </Typography>
                        </Grid>
                        <Grid item container spacing={5}
                            justify="center" alignItems="center"
                        >
                            <Grid item>
                                <IconButton className="text-primary">
                                    <MyLocation />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton className="text-danger" 
                                    onClick={() => dispatch(removeMarkerFromMap(position))}
                                >
                                    <Delete />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            COMPASS
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MarkerCard;