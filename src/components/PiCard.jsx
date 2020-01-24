import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    IconButton,
    Tooltip,
    Toolbar,
    Typography,
} from '@material-ui/core/';
import { Icon } from './';
import {
    Camera,
    WeatherHeadline,
} from './';

const useStyles = makeStyles(theme => ({
    screen: {
        minHeight: '100vh',
    },
    actionBtn: {
        // margin: theme.spacing(),
    },
    grow: {
        flexGrow: 1,
    }
}));


function PiCard() {
    // const store = getStore();
    const classes = useStyles();
    const { pi } = useSelector(state => state);
    const {
        error,
        timeout,
        lastConnectSuccess,
        location
    } = pi;

    let status =
    {
        icon: `connected`,
        color: `primary`,
        subheader: location,
    };
    if (Date.now() - lastConnectSuccess > timeout) {
        status = {
            icon: `disconnected`,
            color: `secondary`,
            subheader: `Connecting ...`,
        }
    }

    return (
        <React.Fragment>
            <div className={classes.screen}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => { }}
                            color={`inherit`}>
                            <Icon icon={`pi`} color={`inherit`} />
                        </IconButton>
                        <Typography variant={`h6`}>
                            PiJS.app
                        </Typography>
                        <div className={classes.grow} />
                        <IconButton className={classes.actionBtn}>
                            <Tooltip title={error}>
                                <Icon icon={status.icon} color={`inherit`} />
                            </Tooltip>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Camera />
                <WeatherHeadline />
            </div>
        </React.Fragment >
    );
}

const MemodFuncComponent = React.memo(PiCard);
export default MemodFuncComponent;
