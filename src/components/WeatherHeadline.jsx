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
    weatherHeadline: {
        marginTop: theme.spacing(),
        border: '1px solid rgba(0,0,0,0.25)',
    },
    grow: {
        flexGrow: 1,
    },
    rightSide: {
        display: 'flex'
    },
    primaryText: {
        color: 'rgba(255,255,255,1)',
    },
    secondaryText: {
        color: 'rgba(241,221,63,1)',
    },
}));

function WeatherHeadline() {
    const classes = useStyles();
    const { weather, pimoroni } = useSelector(state => state);
    const { lux } = pimoroni;
    const {
        // lastFetchSuccess,
        temperature,
        outlookIcon,
        overview,
        humidity,
        windSpeed,
        windDirection,
        sunset,
    } = weather;
    // if (!lastFetchSuccess) { return null }

    return (
        <div className={classes.weatherHeadline}>
            <Grid container className={classes.primaryText}>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant={`h6`} className={classes.secondaryText}>
                        {temperature}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant={`body1`} >
                        Humidity <strong>{humidity}</strong>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant={`body1`} >
                        {overview}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant={`body1`} >
                        Wind <strong>{windSpeed}, {windDirection}</strong>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant={`body1`} >
                        Lux <strong>{lux}</strong>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant={`body1`} >
                        Sunset <strong>{sunset}</strong>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Avatar src={outlookIcon} alt={`weather outlook`} />
                </Grid>

            </Grid>
        </div>
    );
}

const MemodFuncComponent = React.memo(WeatherHeadline);
export default MemodFuncComponent;
