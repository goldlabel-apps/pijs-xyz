import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
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

function playAnimation() {
    gsap.set(`#logo`, {
        scale: 1.25
    });
    gsap.to(`#logo`, {
        ease: `back.in`,
        duration: 1,
        opacity: 1,
    });
}

function Advert() {
    const classes = useStyles();
    // const { intro } = useSelector(state => state.animation);
    useEffect(() => {
        // const { started, finished } = intro;
        // if (!started && !finished) {
        gsap.delayedCall(0.5, playAnimation);
        //}
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