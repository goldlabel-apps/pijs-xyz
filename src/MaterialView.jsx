import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Advert,
    Debug,
    PiCard,
} from './components';

const useStyles = makeStyles(theme => ({
    app: {
        margin: 'auto',
        maxWidth: 800
    },
}));


export default function MaterialView(props) {
    const { debugOn } = props;
    const classes = useStyles();
    const {
        advert,
    } = useSelector(state => state);
    const { complete } = advert;
    let screen = null;
    let debug = null;
    if (debugOn) {
        debug = <Debug />;
    }
    if (!complete) {
        screen = <Advert />;
    } else {
        screen = <div className={classes.app}>
            <PiCard />
        </div >;
    }

    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                {debug}
                {screen}
            </MuiThemeProvider>
        </React.Fragment>
    );
}
