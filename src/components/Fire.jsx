import React from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     Grid,
// } from '@material-ui/core/';
// import {
//     Camera,
// } from './';

const useStyles = makeStyles(theme => ({
    fire: {
        backgroundColor: '#212121',
        border: '1px solid red',
        minHeight: '100vh',
    },
    top: {
        margin: 'auto',
        maxWidth: 800,
    }
}));

export default function Fire() {
    const classes = useStyles();
    // const {
    //     firebase,
    // } = useSelector(state => state);
    // console.log(firebase);
    return (
        <React.Fragment>
            <div className={classes.view}>
                Fire
            </div>
        </React.Fragment>
    );
}
