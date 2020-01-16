import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Logo,
} from './';

import { gsap } from "gsap";

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
        opacity: 0,
        top: 'calc(50vh - 35px)',
        left: 'calc(50vw - 55px)',
    },
}));

function playAnimation() {
    gsap.to("#logo", {
        duration: 1,
        opacity: 1
    });
}

function Intro() {
    const classes = useStyles();
    const { intro } = useSelector(state => state.animation);
    useEffect(() => {
        const { started, finished } = intro;
        if (!started && !finished) {
            // console.log('Start', intro);
            playAnimation();
        }
    }, [intro]);

    return (
        <React.Fragment>
            <div className={classes.intro}>
                <div className={classes.logo} id={`logo`}>
                    <Logo />
                </div>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Intro);
export default MemodFuncComponent;