import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import { useSelector } from 'react-redux';
import {
    Boot,
    Advert,
    Debug,
} from './components';

export default function MaterialView(props) {
    const {
        clockwork,
    } = useSelector(state => state);
    let booted = true
    let screen = null;
    let debug = null;
    if (!booted) {
        screen = <Boot clockwork={clockwork} />;
    } else {
        screen = <Advert />;
    }
    const { debugOn } = props;
    if (debugOn) {
        debug = <Debug />;
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
