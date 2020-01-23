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
        // marginTop: theme.spacing(),
    },
    grow: {
        flexGrow: 1,
    },
    chinese: {
    },
}));

function WeatherHeadline() {
    // const store = getStore();
    const classes = useStyles();
    const { weather } = useSelector(state => state);
    const {
        lastFetchSuccess,
        temperature,
        outlookIcon,
    } = weather;

    if (!lastFetchSuccess) { return null }

    return (
        <div className={classes.weatherHeadline}>
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
        </div>
    );
}

const MemodFuncComponent = React.memo(WeatherHeadline);
export default MemodFuncComponent;
