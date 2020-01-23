import React from 'react';
// import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Grid,
    Typography,
} from '@material-ui/core/';
// import { Icon } from './';

const useStyles = makeStyles(theme => ({
    weatherWrap: {
        maxWidth: 350,
        position: 'absolute',
        right: theme.spacing(3),
        top: theme.spacing(14),
        borderRadius: theme.spacing(0.5),
        border: `1px solid ` + theme.palette.secondary.main,
        background: 'rgba(0, 0, 0, 0.8)',
        padding: theme.spacing(),
    },
    chinese: {
        // color: '#212121',
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

                <Grid item xs={7}>
                    <Typography
                        variant={`body1`} className={classes.chinese}>
                        <strong>Wind </strong>&nbsp;{windSpeed}, {windDirection}
                        <br />
                        <strong>Sunset </strong>&nbsp;{sunset}
                        <br />
                        <strong>Humidity</strong>&nbsp;{humidity}
                        <br />
                        <strong>{lux}</strong>&nbsp;lux
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography
                        variant={`h4`} className={classes.chinese}>
                        {temperature}
                    </Typography>
                    <Typography
                        variant={`body1`} className={classes.chinese}>
                        {overview}
                    </Typography>
                    <Avatar src={outlookIcon} alt={`weather outlook`} />
                </Grid>
            </Grid>
        </div>
    );
}

const MemodFuncComponent = React.memo(Weather);
export default MemodFuncComponent;
