import React from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     Grid,
// } from '@material-ui/core/';
import {
    Logo,
} from './';

const useStyles = makeStyles(theme => ({
    fire: {
        position: 'absolute',
        backgroundColor: '#212121',
        width: '100%',
        height: '100%',
    },
    logo: {
        position: 'relative',
        width: 190,

        top: 200,
        left: 200,
    },
}));

export default function Fire() {
    const classes = useStyles();
    // const {
    //     firebase,
    // } = useSelector(state => state);
    // console.log(firebase);
    return (
        <React.Fragment>
            <div className={classes.fire}>
                <div className={classes.logo}>
                    <Logo />
                </div>
            </div>
        </React.Fragment>
    );
}
