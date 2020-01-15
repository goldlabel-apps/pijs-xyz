import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getStore } from '../';
import {
    Typography,
    IconButton,
    Grid,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    logo: {
        // display: 'flex',
        // marginRight: theme.spacing(4),
        // padding: theme.spacing(),
        // border: '1px solid limegreen',
        // borderRadius: theme.spacing(),
    },
    logoText: {
        color: 'rgba(255,222,255,0.9)',
        marginTop: theme.spacing(1.2),
        marginLeft: theme.spacing()
    },

}));

function Logo() {
    const classes = useStyles();
    const store = getStore();
    return (
        <div id={`logo`}
            className={classes.logo}>
            <Grid container>
                <Grid item>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: `CAMERA/OPEN` });
                            store.dispatch({ type: `WEATHER/OPEN` });
                            store.dispatch({ type: `SYSTEM/USERENTITY/OPEN` });
                        }}>
                        <Icon icon={`home`} color={`primary`} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.logoText}
                        variant={`h6`}>
                        Test
            </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

const MemodFuncComponent = React.memo(Logo);
export default MemodFuncComponent;