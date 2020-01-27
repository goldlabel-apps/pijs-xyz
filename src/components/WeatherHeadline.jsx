import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Avatar,
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    weatherHeadline: {
        padding: theme.spacing(),
        paddingRight: theme.spacing(),
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
    pullRight: {
        display: 'flex',
        textAlign: 'right',
    }
}));

function WeatherHeadline() {
    const classes = useStyles();
    const { weather, pimoroni } = useSelector(state => state);
    const { lux } = pimoroni;
    const {
        lastFetchSuccess,
        temperature,
        outlookIcon,
        overview,
        humidity,
        windSpeed,
        windDirection,
        sunset,
    } = weather;
    if (!temperature) { return null }

    return (
        <div className={classes.weatherHeadline}>
            <Grid container className={classes.primaryText}>
                <Grid item xs={4}>
                    <Typography
                        variant={`h6`}
                        className={classes.pullRight}>

                        <Avatar
                            src={outlookIcon}
                            alt={`weather outlook`}
                        />
                        {temperature}
                    </Typography>

                </Grid>

                <Grid item xs={8}>
                    <Typography variant={`body1`} >
                        Humidity <strong>{humidity}</strong>
                    </Typography>
                    <Typography variant={`body2`} >
                        {overview}<br />
                        Lux <strong>{lux}</strong><br />
                        Sunset {sunset}<br />
                        Wind <strong>{windSpeed}</strong>, {windDirection}<br />
                        Updated {moment(lastFetchSuccess).fromNow()}
                    </Typography>
                </Grid>

            </Grid>
        </div>
    );
}

const MemodFuncComponent = React.memo(WeatherHeadline);
export default MemodFuncComponent;
