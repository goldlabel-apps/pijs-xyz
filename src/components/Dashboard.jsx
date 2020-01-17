import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core/';
import {
    UserEntity,
    Camera,
} from './';

const useStyles = makeStyles(theme => ({
    dashboard: {
    },
    ticks: {
        // border: '1px solid gold',
        background: 'rgba(255,255,255,0.75)',
        padding: theme.spacing(0.5),
        position: 'fixed',
        bottom: theme.spacing(0.5),
        right: theme.spacing(0.5),
    }
}));

function Dashboard() {
    const classes = useStyles();
    const { clockwork } = useSelector(state => state);
    return (
        <React.Fragment>
            <div className={classes.dashboard}>
                <Camera />
                <UserEntity />
                <div className={classes.ticks}>
                    <Typography variant={`body2`}>
                        Ticks {clockwork.ticks}
                    </Typography>
                </div>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Dashboard);
export default MemodFuncComponent;
