import React from 'react';
// import { getStore } from '../';
// import { Icon } from './';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Avatar,
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    weatherWrap: {
        width: 175,
        position: 'absolute',
        right: theme.spacing(3),
        top: theme.spacing(14),
        borderRadius: theme.spacing(0.5),
        border: `1px solid rgba(0, 0, 0, 0.9)`,
        background: 'rgba(0, 0, 0, 0.8)',
        padding: theme.spacing(),
    },
    grow: {
        flexGrow: 1,
    },
    chinese: {
        // color: '#212121',
        fontSize: 12,
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
        temperature,
        humidity,
        overview,
        outlookIcon,
        sunset
    } = weather;

    if (!lastFetchSuccess) { return null }

    const { lux } = pimoroni;

    return (
        <div className={classes.weatherWrap}>
            <Grid container>
                <Grid item>
                    <Typography variant={`h6`} >
                        {temperature}
                    </Typography>
                </Grid>
                <Grid item className={classes.grow} />
                <Grid item>
                    <Avatar src={outlookIcon} alt={`weather outlook`} />
                </Grid>
            </Grid>
            <Typography
                variant={`body1`} className={classes.chinese}>
                <strong>{overview}</strong>
                <br />
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
