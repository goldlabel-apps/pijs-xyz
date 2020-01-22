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
// import moment from 'moment';

const useStyles = makeStyles(theme => ({
    weatherWrap: {
        maxWidth: 350,
        position: 'absolute',
        left: theme.spacing(4),
        bottom: theme.spacing(5),
        borderRadius: theme.spacing(0.5),
        border: '1px solid rgba(241,221,63,1)',
        background: 'rgba(241, 221, 63, 0.7)',
        padding: theme.spacing(),
    },
    chinese: {
        color: '#212121',
    },

}));

function Weather() {
    // const store = getStore();
    const classes = useStyles();
    const { weather, pimoroni } = useSelector(state => state);
    const {
        // updated,
        lastFetchSuccess,
        // error,
        windSpeed,
        windDirection,
        temperature,
        humidity,
        overview,
        outlookIcon,
        sunset
    } = weather;
    const { lux } = pimoroni;
    // console.log('updated')
    if (!lastFetchSuccess) { return null }

    return (
        <div className={classes.weatherWrap}>
            <Grid container>
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

                <Grid item xs={7}>
                    <Typography
                        variant={`body1`} className={classes.chinese}>
                        <strong>Wind </strong>&nbsp;{windSpeed}, from {windDirection}
                        <br />
                        <strong>Sunset </strong>&nbsp;{sunset}
                        <br />
                        <strong>Humidity</strong>&nbsp;{humidity}
                        <br />
                        <strong>{lux}</strong>&nbsp;lumens per square meter
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

const MemodFuncComponent = React.memo(Weather);
export default MemodFuncComponent;
