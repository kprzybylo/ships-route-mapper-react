import { Grid, Slider, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTurnRadius } from "../redux/actions";
import { getTurnRadius } from "../redux/selectors";

const sliderValues = {
    minValue: 20,
    maxValue: 200,
    defaultValue: 20
}

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
            <Typography id="continous-slider" gutterBottom>
                Turn radius: {turnRadius} m
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    {sliderValues.minValue} m
                </Grid>
                <Grid item xs>
                    <Slider
                        defaultValue={sliderValues.defaultValue}
                        value={turnRadius}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                        min={sliderValues.minValue}
                        max={sliderValues.maxValue}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    {sliderValues.maxValue} m
                </Grid>
            </Grid>
        </>
    );
}

export default TurnRadius;