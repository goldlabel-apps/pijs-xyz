import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import { useSelector } from 'react-redux';
import {
    Advert,
    Debug,
    Dashboard,
} from './components';

export default function MaterialView(props) {
    const { debugOn } = props;
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
        screen = <Dashboard />;
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
