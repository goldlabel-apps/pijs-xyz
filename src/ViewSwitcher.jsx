import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
// import { useSelector } from 'react-redux';
import {
    Boot,
    Advert,
} from './components';

export default function ViewSwitcher() {
    // const {
    //     boot,
    // } = useSelector(state => state.system);
    let booted = true
    let screen = null;
    if (!booted) {
        screen = <Boot />;
    } else {
        screen = <Advert />;
    }

    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                {screen}
            </MuiThemeProvider>
        </React.Fragment>
    );
}
