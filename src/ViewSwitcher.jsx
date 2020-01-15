import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import { useSelector } from 'react-redux';
import {
    Boot,
    Intro,
} from './components';

export default function ViewSwitcher() {
    const {
        boot,
    } = useSelector(state => state.system);

    let screen = null;
    if (!boot.booted) {
        screen = <Boot />;
    } else {
        screen = <Intro />;
    }

    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                {screen}
            </MuiThemeProvider>
        </React.Fragment>
    );
}
