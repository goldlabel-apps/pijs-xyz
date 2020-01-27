import React from 'react';
import { getStore } from './';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { checkFirstRun, syncFirebase, locateUser } from './redux/firebase/actions'
import { fetchWeather } from "./redux/weather/actions";
import {
    // Advert,
    Debug,
    // App,
} from './components';

const useStyles = makeStyles(theme => ({
    app: {
        margin: 'auto',
        maxWidth: 400
    },
}));

export default function MaterialView(props) {
    const store = getStore();
    const classes = useStyles();
    const {
        firebase,
        weather,
    } = useSelector(state => state);

    let screen = null;
    const {
        firstRunCheck,
        firstRunChecking,
        entity,
        location,
        locating
    } = firebase;
    let shouldWeShowIt = true;
    if (!firstRunCheck && !firstRunChecking) {
        setTimeout(checkFirstRun(), 3500);
    }

    if (!location && !locating) {
        locateUser(store);
        return null;
    }

    let debug = null;
    const { debugOn } = props;
    if (debugOn) {
        debug = <Debug />;
    }

    const weatherFetching = weather.fetching;
    const weatherFetched = weather.fetched;
    if (!weatherFetching && !weatherFetched) {
        fetchWeather();
    }

    if (shouldWeShowIt) {
        screen = <pre className={classes.stringified}>
            {JSON.stringify(entity, null, 2)}
        </pre>;
    }

    // syncFirebase(store);

    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                {debug}
                {screen}
            </MuiThemeProvider>
        </React.Fragment>
    );
}
