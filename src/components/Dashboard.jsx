import React from 'react';
import { getStore } from '../';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Typography,
} from '@material-ui/core/';
import {
    Camera,
    Verbindungsstatus,
} from './';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    dashboard: {
        minHeight: '100vh',
    },
    grow: {
        flexGrow: 1,
    },
    header: {
        display: 'flex',
    },
    homeBtn: {
        margin: theme.spacing(),
    },
    logoText: {
        color: 'rgba(241,221,63,0.9)',
        marginTop: theme.spacing(2.25),
    },
}));

function Dashboard() {
    const store = getStore();
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.dashboard}>
                <div className={classes.header}>
                    <IconButton
                        className={classes.homeBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            // console.log('RESET ALL THE THINGS')
                            store.dispatch({ type: `ADVERT/RESET` });
                            store.dispatch({ type: `CAMERA/RESET` });
                            store.dispatch({ type: `CLOCKWORK/RESET` });
                            store.dispatch({ type: `FIREBASE/RESET` });
                            store.dispatch({ type: `PI/RESET` });
                            store.dispatch({ type: `PIMORONI/RESET` });
                            store.dispatch({ type: `PIMORONI/RESET` });
                            store.dispatch({ type: `USERENTITY/RESET` });
                        }}>
                        <Icon icon={`pi`} color={`primary`} />
                    </IconButton>
                    <Typography
                        className={classes.logoText}
                        variant={`h6`}>
                        PiJS.app
                    </Typography>
                    <div className={classes.grow} />
                    <Verbindungsstatus />
                </div>
                <div className={classes.expansionPanels}>
                    <Camera />
                </div>
            </div>
        </React.Fragment >
    );
}

const MemodFuncComponent = React.memo(Dashboard);
export default MemodFuncComponent;
