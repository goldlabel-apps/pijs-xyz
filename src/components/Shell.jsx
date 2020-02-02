import React from 'react'
import commonStyles from '../theme/commonStyles'
import { useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';
import {
    Grid,
} from '@material-ui/core/'
import {
    Bottom,
    Snackbars,
    Camera,
    Map,
    PrimaryAppBar,
    Weather,
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
    // console.log(useTheme())
    return (
        <div className={classes.shell}>
            <PrimaryAppBar className={classesCommon.none} />
            <Snackbars />
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Camera />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Map />
                    <Weather />
                </Grid>
            </Grid>
            <Bottom />
        </div>
    );
}









/*

   Typography,
    AppBar,
    Toolbar,
    IconButton,


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
                            window.open(`https://github.com/listingslab-hardware/pijs-app`,`_blank`)
                        }}>
                        Github
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.appInner}>
                <Button
                    className={classes.btn}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault()
                    }}>
                    Primary
                </Button>
                <Button
                    className={classes.btn}
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault()
                    }}>
                    Secondary
                </Button>
                <Typography className={classes.fingerprint}>
                    {entity.fingerprint}
                </Typography>
            </div>
        </div>
*/