import React from 'react'
import commonStyles from '../theme/commonStyles'
import { useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core/'
import {
    Bottom,
    Snackbars,
    Camera,
    Weather,
    PrimaryAppBar,
} from './'

const style = makeStyles(theme => ({
    shell: {
        background: theme.palette.bg.main,
        height: "100vh",
        width: "100vw"
    }
}));

export default function Shell() {
    const classesCommon = commonStyles();
    const classes = style(useTheme());
    return (
        <div className={classes.shell}>
            <PrimaryAppBar className={classesCommon.none} />
            <Snackbars />
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Camera />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {/* <Map /> */}
                    <Weather />
                </Grid>
            </Grid>
            <Bottom />
        </div>
    );
}
