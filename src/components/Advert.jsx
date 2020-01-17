import React, { useEffect } from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from "gsap";
import {
    PiJSLogo,
} from './';

const useStyles = makeStyles(theme => ({
    intro: {
        position: 'absolute',
        backgroundColor: '#212121',
        width: '100%',
        height: '100%',
    },
    logo: {
        opacity: 0,
        scale: 1.5,
        position: 'relative',
        top: 'calc(50vh - 24px)',
    },
}));

function adComplete() {
    const store = getStore();
    store.dispatch({ type: `ADVERT/COMPLETE` })
}

function fadeInDone() {
    gsap.delayedCall(2, fadeOutLogo);
}

function fadeOutLogo() {
    gsap.to(`#logo`, {
        onComplete: adComplete,
        duration: 1,
        opacity: 0,
    });
}

function fadeInLogo() {
    gsap.set(`#logo`, {
        scale: 1.25
    });
    gsap.to(`#logo`, {
        duration: 1,
        opacity: 1,
        onComplete: fadeInDone,
    });
}

function Advert() {
    const classes = useStyles();
    const { advert } = useSelector(state => state);
    const { complete, started } = advert;
    useEffect(() => {
        if (!started && !complete) {
            const store = getStore();
            store.dispatch({ type: `ADVERT/START` })
            store.dispatch({ type: `ADVERT/PLAY` })
            gsap.delayedCall(0.5, fadeInLogo);
        }
        // }, [intro]);
    })
    return (
        <React.Fragment>
            <div className={classes.intro}>
                <div className={classes.logo} id={`logo`}>
                    <PiJSLogo />
                </div>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Advert);
export default MemodFuncComponent;