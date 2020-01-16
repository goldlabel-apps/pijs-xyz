import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    debugger: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.25)',
        border: '1px solid rgba(255,255,255,0.5)',
        zIndex: 12324124,
        color: 'white',
        width: 250,
        padding: theme.spacing(),
        margin: theme.spacing(),
    },
}));

function Debug() {
    const classes = useStyles();
    const { clockwork } = useSelector(state => state);
    return (
        <React.Fragment>
            <div className={classes.debugger}>
                Ticks {clockwork.data.ticks}
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Debug);
export default MemodFuncComponent;