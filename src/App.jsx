import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import {
    Button,
    Typography
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    app: {
        background: theme.palette.background.default,
        height: '100vh',
        width: '100vw',
    },
    appInner: {
        margin: theme.spacing(),
        color: theme.palette.text.main,
    },
    btn: {
        margin: theme.spacing()
    },
    fingerprint: {
        margin: theme.spacing()
    }
}));

export default function App() {
    const classes = useStyles();
    const {
        entity,
    } = useSelector(state => state);
    // console.log(entity)
    // https://www.npmjs.com/package/react-countdown-circle-timer
    return (
        <div className={classes.app}>
            <div className={classes.appInner}>
                <Button
                    className={classes.btn}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    Primary
                </Button>

                <Button
                    className={classes.btn}
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    Secondary
                </Button>

                <Typography className={classes.fingerprint}>
                    {entity.fingerprint}
                </Typography>

            </div>
        </div>
    );
}
