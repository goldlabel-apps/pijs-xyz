import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    debug: {
        // width: 600,
        // position: 'absolute',
        backgroundColor: 'rgba(33,33,33,1)',
        border: '1px solid rgba(255,255,255,0.5)',
        color: 'white',
    },
    stringified: {
        display: 'block',
        width: 400,
        fontSize: 12,
        // border: '1px solid rgba(255,255,255,0.9)',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    ticks: {
        marginTop: theme.spacing()
    }
}));

function Debug() {
    const classes = useStyles();
    const {
        firebase,
    } = useSelector(state => state);
    const { entity } = firebase;
    if (!entity) return null
    return (
        <React.Fragment>
            <div className={classes.debug}>
                <Typography variant={`h5`}>
                    UserEntity
                </Typography>
                <pre className={classes.stringified}>
                    {JSON.stringify(entity, null, 2)}
                </pre>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Debug);
export default MemodFuncComponent;


/* <div>
    {JSON.stringify(userEntity.action, null, 3)}
</div> */

