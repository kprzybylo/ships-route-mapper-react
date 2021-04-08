import { Grid, Slider } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTurnRadius } from "../redux/actions";
import { getTurnRadius } from "../redux/selectors";


function TurnRadius() {
    const turnRadius: number = useSelector(getTurnRadius);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            newValue = newValue[0];
        }

        dispatch(setTurnRadius(newValue));
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    {turnRadius}
                </Grid>
                <Grid item xs>
                    <Slider
                        defaultValue={turnRadius}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                        min={20}
                        max={200}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    {200}
                </Grid>
            </Grid>
        </>
    );
}

export default TurnRadius;