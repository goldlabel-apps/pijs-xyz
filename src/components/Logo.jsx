import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getStore } from '../';
import {
    Typography,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    logo: {
        display: 'flex',
    },
    icon: {
        marginLeft: -theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    logoText: {
        color: 'rgba(255,222,255,0.75)',
        marginTop: theme.spacing(1.2),
    },
}));

function Logo() {
    const classes = useStyles();
    const store = getStore();
    return (
        <div id={`logo`} className={classes.logo}>
            <div className={classes.grow} />
            <IconButton
                className={classes.icon}
                onClick={(e) => {
                    e.preventDefault();
                    store.dispatch({ type: `CAMERA/OPEN` });
                    store.dispatch({ type: `WEATHER/OPEN` });
                    store.dispatch({ type: `SYSTEM/USERENTITY/OPEN` });
                }}>
                <Icon icon={`settings`} color={`primary`} />
            </IconButton>
            <Typography
                className={classes.logoText}
                variant={`h6`}>
                TEST
            </Typography>
            <div className={classes.grow} />
        </div>
    );
}

const MemodFuncComponent = React.memo(Logo);
export default MemodFuncComponent;