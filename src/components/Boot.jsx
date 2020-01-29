import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    boot: {
        background: '#000000',
        height: '100vh',
    },
    message: {
        margin: theme.spacing(1),
        fontSize: '1rem',
        color: 'white',
    },
    gold: {
        color: 'rgba(241,221,63,1)',
    },
}));

export default function Boot() {
    const classes = useStyles();
    // const {
    //     boot,
    // } = useSelector(state => state.system);
    // const { consoleMessage } = boot;
    // const {
    //     cursorOn,
    // } = boot;
    const cursorOn = true;
    const consoleMessage = `This is the boot screen. The first piece of react`;
    const createMarkup = () => {
        let message = consoleMessage;
        message = cursorOn ? `${message} _` : message;
        return { __html: message };
    };
    return (
        <div className={classes.boot}>
            <div
                className={classes.message}
                dangerouslySetInnerHTML={createMarkup()} />
        </div>
    );
}
