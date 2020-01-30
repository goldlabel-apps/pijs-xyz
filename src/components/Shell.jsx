import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    shell: {
        background: 'red',
        height: '100vh',
    },
}));

export default function Shell() {
    const classes = useStyles();
    return (
        <div className={classes.shell}>
            Shell
        </div>
    );
}
