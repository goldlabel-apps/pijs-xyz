import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    logo: {
        display: 'flex',
    },
    icon: {
        marginRight: -theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    logoText: {
        // color: 'rgba(241,221,63,0.9)',
        color: 'rgba(255,255,255,0.9)',
        marginTop: theme.spacing(1.2),
    },
}));

function ByListingslab() {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <div className={classes.grow} />
            <Typography
                className={classes.logoText}
                variant={`h6`}>
                by listingslab
            </Typography>
            <IconButton
                className={classes.icon}
                onClick={(e) => {
                    e.preventDefault();
                    window.open(`https://listingslab.com`, `_blank`)
                }}>
                <Icon icon={`listingslab`} color={`primary`} />
            </IconButton>
            <div className={classes.grow} />
        </div>
    );
}

const MemodFuncComponent = React.memo(ByListingslab);
export default MemodFuncComponent;