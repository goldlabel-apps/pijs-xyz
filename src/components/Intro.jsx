import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Logo,
} from './';
import { TimelineMax, Power2 } from "gsap";

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
    const div = document.getElementById(`logo`);
    const timeline = new TimelineMax();
    timeline.to(div, 3, {
        opacity: 1,
        ease: Power2.easeOut
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