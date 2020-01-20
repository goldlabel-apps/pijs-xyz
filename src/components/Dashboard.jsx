import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Typography,
} from '@material-ui/core/';
import {
    UserEntity,
    Camera,
    Pi,
    Pimoroni,
    Weather,
} from './';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    dashboard: {
        background: '#212121',
        minHeight: '100vh',
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
    ticks: {
        color: 'gold',
        background: 'rgba(255,255,255,0.05)',
        padding: theme.spacing(),
        position: 'fixed',
        bottom: theme.spacing(),
        right: theme.spacing(),
    }
}));

function Dashboard() {
    const classes = useStyles();
    const { clockwork } = useSelector(state => state);
    return (
        <React.Fragment>
            <div className={classes.dashboard}>
                <div className={classes.header}>
                    <IconButton
                        className={classes.homeBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            // console.log(e.target)
                        }}>
                        <Icon icon={`pi`} color={`primary`} />
                    </IconButton>
                    <Typography
                        className={classes.logoText}
                        variant={`h6`}>
                        PiJS.app
                </Typography>
                </div>

                <Pimoroni />
                <Camera />
                <Weather />
                <Pi />
                <UserEntity />

                <div className={classes.ticks}>
                    <Typography variant={`body2`}>
                        Ticks {clockwork.ticks}
                    </Typography>
                </div>
            </div>
        </React.Fragment >
    );
}

const MemodFuncComponent = React.memo(Dashboard);
export default MemodFuncComponent;
