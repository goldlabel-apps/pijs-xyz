import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    byListingslab: {
        marginLeft: 150,
        opacity: 0,
    },
    logoText: {
        color: 'rgba(255,255,255,1)',
        paddingTop: theme.spacing()
    },

}));

function ByListingslab() {
    const classes = useStyles();
    return (
        <div id={`by-listingslab`} className={classes.byListingslab}>
            <Grid container>
                <Grid item className={classes.logo}>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(`https://listingslab.com`, `_blank`)
                        }}>
                        <Icon icon={`spade`} color={`primary`} />
                    </IconButton>
                </Grid>
                <Grid item className={classes.logoText}>
                    <Typography variant={`h6`}>
                        by listingslab
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

const MemodFuncComponent = React.memo(ByListingslab);
export default MemodFuncComponent;