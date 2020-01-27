import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core/';
import {
    Camera,
    Icon,
    Footer,
    WeatherHeadline,
    UserEntity,
} from './';

const useStyles = makeStyles(theme => ({
    screen: {
        minHeight: '100vh',
        border: '1px solid rgba(241,221,63,0)',
    },
    actions: {
        display: 'flex',
    },
    heading: {
        // border: '1px solid white',
        display: 'flex',
    },
    headingRight: {
        // border: '1px solid pink',
    },
    headingAppName: {
        // border: '1px solid pink',
        paddingTop: theme.spacing(),
    },
    grow: {
        flexGrow: 1,
    },
    white: {
        color: 'white',
    }
}));


function PiCard() {
    const store = getStore();
    const classes = useStyles();
    const { pi } = useSelector(state => state);
    const {
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
                <div className={classes.heading}>
                    <div className={classes.headingLogo}>
                        <Tooltip title={`Restart`}>
                            <IconButton
                                onClick={() => {
                                    store.dispatch({ type: `SYSTEM/RESTART` });
                                }}
                                color={`inherit`}>
                                <Icon icon={`pi`} color={`inherit`} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className={classes.headingAppName}>
                        <Typography variant={`h6`} className={classes.white}>
                            PiJS.app
                        </Typography>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.actions}>
                        <Tooltip title={status.icon}>
                            <IconButton
                                onClick={(e) => {
                                    e.preventDefault();
                                }}>
                                <Icon icon={status.icon} color={`primary`} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={`Open Source on Github`}>
                            <IconButton
                                color={`inherit`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`https://github.com/listingslab-hardware/pijs-app`, `_blank`);
                                }}>
                                <Icon icon={`github`} color={`rgba(241,221,63,1)`} />
                            </IconButton>
                        </Tooltip>
                        <UserEntity />
                    </div>
                </div>
                <Camera />
                <WeatherHeadline />
                <Footer />
            </div>
        </React.Fragment >
    );
}

const MemodFuncComponent = React.memo(PiCard);
export default MemodFuncComponent;
