import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     Grid,
// } from '@material-ui/core/';
import {
    Logo,
} from './';

const useStyles = makeStyles(theme => ({
    intro: {
        position: 'absolute',
        backgroundColor: '#212121',
        width: '100%',
        height: '100%',
    },
    logo: {
        position: 'relative',
        width: 150,
        top: 'calc(50vh - 35px)',
        left: 'calc(50vw - 55px)',

    },
}));

function Intro() {
    const classes = useStyles();

    useEffect(() => {
        // console.log ('effect')
    });

    // const {
    //     firebase,
    // } = useSelector(state => state);
    // console.log(firebase);
    return (
        <React.Fragment>
            <div className={classes.intro}>
                <div className={classes.logo}>
                    <Logo />
                </div>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Intro);
export default MemodFuncComponent;