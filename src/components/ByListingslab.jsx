import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    byListingslab: {
        opacity: 0,
        textAlign: 'center',
        width: 200,
    },
    logoText: {
        color: 'rgba(255,255,255,1)',
    },
    logo: {
        marginRight: theme.spacing(2)
    },
}));

function ByListingslab() {
    const classes = useStyles();
    return (
        <div id={`by-listingslab`} className={classes.byListingslab}>
            <Typography variant={`h6`} className={classes.logoText}>
                <Icon
                    icon={`spade`}
                    color={`primary`}
                    className={classes.logo}
                /> by listingslab
            </Typography>
        </div>
    );
}

const MemodFuncComponent = React.memo(ByListingslab);
export default MemodFuncComponent;