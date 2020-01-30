import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import {
    Button,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core/'
import Github from './svg/Github'

const useStyles = makeStyles(theme => ({
    app: {
        background: theme.palette.background.default,
        flexGrow: 1,
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
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
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
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Github color={`rgba(255,255,255,0.25)`} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Appbar
                     </Typography>
                    <Button
                        variant={`contained`}
                        color={`secondary`}
                        onClick={(e) => {
                            window.open(`https://github.com/listingslab-hardware/pijs-app`, `_blank`)
                        }}
                    >
                        Repo
                    </Button>
                </Toolbar>
            </AppBar>
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
