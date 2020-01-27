import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    EffectsMenu,
} from './';

const useStyles = makeStyles(theme => ({
    cameraControls: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appbar: {
        border: 'none',
        boxShadow: 'none',
    },
    iconPusher: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing()
    },
}));

function CameraControls() {
    const classes = useStyles();
    const { pi } = useSelector(state => state);
    const {
        lastConnectSuccess,
    } = pi;

    if (!lastConnectSuccess) { return null }

    return (
        <div className={classes.cameraControls}>
            {/* <div className={classes.grow} /> */}
            <div>
                <EffectsMenu />
            </div>

        </div>
    );
}

const MemodFuncComponent = React.memo(CameraControls);
export default MemodFuncComponent;

/*
<Button
                variant={`contained`}
                className={classes.zoomButton}
                size={`small`}
                color={`secondary`}
                onClick={() => { }}>
                <Icon icon={`reset`} color={`inherit`} />
                {!isMobile ? <span className={classes.iconPusher}>Reset</span> : null}
            </Button>

            <Button
                variant={`contained`}
                className={classes.zoomButton}
                size={`small`}
                color={`secondary`}
                onClick={() => { }}>
                <Icon icon={`zoomin`} color={`inherit`} />
                {!isMobile ? <span className={classes.iconPusher}>Zoom In</span> : null}
            </Button>

            <Button
                variant={`contained`}
                className={classes.zoomButton}
                size={`small`}
                color={`secondary`}
                onClick={() => { }}>
                <Icon icon={`zoomout`} color={`inherit`} />
                {!isMobile ? <span className={classes.iconPusher}>Zoom Out</span> : null}
            </Button>
*/