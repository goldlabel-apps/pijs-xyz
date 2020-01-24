import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    weatherWrap: {
        marginTop: theme.spacing(),
        border: '1px solid blue',
    },
    grow: {
        flexGrow: 1,
    },
    chinese: {
    },
}));

function Weather() {
    // const store = getStore();
    const classes = useStyles();
    const { weather, pimoroni } = useSelector(state => state);
    const {
        lastFetchSuccess,
        windSpeed,
        windDirection,
        humidity,
        sunset
    } = weather;

    if (!lastFetchSuccess) { return null }

    const { lux } = pimoroni;

    return (
        <div className={classes.weatherWrap}>
            <Typography
                variant={`body1`} className={classes.chinese}>
                Wind <strong>{windSpeed}, {windDirection}</strong>
                <br />
                Sunset <strong>{sunset}</strong>
                <br />
                Humidity <strong>{humidity}</strong>
                <br />
                Lux <strong>{lux}</strong>
            </Typography>
        </div>
    );
}

const MemodFuncComponent = React.memo(Weather);
export default MemodFuncComponent;
