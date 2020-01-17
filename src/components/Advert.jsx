import React, { useEffect } from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from "gsap";
import {
    PiJSLogo,
    ByListingslab,
} from './';

const baseDuration = 0.1;

function fadeInLogo() {
    gsap.to(`#pijs-logo`, {
        duration: 1 * baseDuration,
        opacity: 1,
        onComplete: delayFadeOutLogo,
    });
}
function delayFadeOutLogo() {
    gsap.delayedCall(0.75 * baseDuration, fadeOutLogo);
}
function fadeOutLogo() {
    gsap.to(`#pijs-logo`, {
        duration: 1 * baseDuration,
        opacity: 0,
        onComplete: fadeInListingslab,
    });
}
function fadeInListingslab() {
    gsap.to(`#by-listingslab`, {
        duration: 1 * baseDuration,
        opacity: 1,
        onComplete: delayFadeOutListingslab,
    });
}
function delayFadeOutListingslab() {
    gsap.delayedCall(0.75 * baseDuration, fadeOutListingslab);
}
function fadeOutListingslab() {
    gsap.to(`#by-listingslab`, {
        duration: 1 * baseDuration,
        opacity: 0,
        onComplete: adComplete,
    });
}
function adComplete() {
    const store = getStore();
    store.dispatch({ type: `ADVERT/COMPLETE` })
}

const useStyles = makeStyles(theme => ({
    intro: {
        position: 'absolute',
        backgroundColor: '#212121',
        width: '100%',
        height: '100%',
    },
    piJSLogo: {
        opacity: 0,
        position: 'relative',
        top: 'calc(50vh - 24px)',
    },
    listingslab: {
        opacity: 0,
        position: 'relative',
        top: 'calc(50vh - 70px)',
    },
}));

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
    })
    return (
        <React.Fragment>
            <div className={classes.intro}>
                <div
                    className={classes.piJSLogo}
                    id={`pijs-logo`}>
                    <PiJSLogo />
                </div>
                <div
                    className={classes.listingslab}
                    id={`by-listingslab`}>
                    <ByListingslab />
                </div>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Advert);
export default MemodFuncComponent;