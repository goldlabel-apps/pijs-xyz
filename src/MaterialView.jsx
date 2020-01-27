import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { isFirstRun } from './redux/firebase/actions'
import {
    // Advert,
    Debug,
    // PiCard,
} from './components';

const useStyles = makeStyles(theme => ({
    app: {
        margin: 'auto',
        maxWidth: 400
    },
}));


export default function MaterialView(props) {
    // const classes = useStyles();
    const {
        // advert,
        system,
        firebase,
    } = useSelector(state => state);

    // console.log('firstRun', firstRun);
    let screen = `First run?`;

    const { firstRun } = system;
    const { connected, connecting } = firebase;

    if (!connected && !connecting) {
        isFirstRun();
        return null;
    }

    if (!firstRun) {
        screen = `Not checked yet....`;
    }

    // const { firstRun } = system;
    // const { complete } = advert;


    // if (!complete) {
    //     screen = <Advert />;
    // } else {
    //     screen = <div className={classes.app}>
    //         <PiCard />
    //     </div >;
    // }

    let debug = null;
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
