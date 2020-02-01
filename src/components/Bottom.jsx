import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import {
    Badge,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './'

const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function Bottom() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="secondary" className={classes.appBar}>
                <Toolbar>
                    <Fab
                        className={classes.fabButton}
                        color={`secondary`}
                        aria-label={`Call to action`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('Call to action')
                        }}>
                        <Icon icon={`contact`} />
                    </Fab>
                    <div className={classes.grow} />
                    <IconButton
                        edge={`end`}
                        color={`inherit`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('Settings')
                        }}>
                        <Icon icon={`settings`} />
                    </IconButton>

                    <IconButton
                        edge={`end`}
                        color={`inherit`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('User Entity')
                        }}
                    >
                        <Badge badgeContent={0} color="secondary">
                            <Icon icon={`userentity`} color={`inherit`} />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
