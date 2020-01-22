import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Fab,
} from '@material-ui/core/';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    lux: {
        position: 'absolute',
        left: theme.spacing(4),
        top: theme.spacing(15),
        borderRadius: theme.spacing(0.5),
        border: '1px solid rgba(241,221,63,1)',
        background: 'rgba(241, 221, 63, 0.8)',
        padding: theme.spacing(),
        zIndex: 12343212,
        color: '#212121',
    },
    tools: {
        position: 'absolute',
        left: theme.spacing(3),
        bottom: theme.spacing(),
        zIndex: 1234321,
    },
    panPincher: {
        maxWidth: '100%',
    },
    zoomButton: {
        border: `1px solid ` + theme.palette.primary.main,
        margin: theme.spacing(0.5)
    }
}));

function Camera() {
    const store = getStore();
    const classes = useStyles();
    const { camera } = useSelector(state => state);
    const {
        expanded,
        currentPhoto,
        error
    } = camera;

    return (
        <React.Fragment>
            <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        {expanded ?
                            <React.Fragment>

                                <div className={classes.tools}>
                                    <Fab
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`secondary`}
                                        onClick={resetTransform}>
                                        <Icon icon={`reset`} color={`primary`} />
                                    </Fab>
                                    <Fab
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`secondary`}
                                        onClick={zoomIn}>
                                        <Icon icon={`zoomin`} color={`primary`} />
                                    </Fab>
                                    <Fab
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`secondary`}
                                        onClick={zoomOut}>
                                        <Icon icon={`zoomout`} color={`primary`} />
                                    </Fab>

                                </div>
                            </React.Fragment>
                            : null}
                        {!error ?
                            <TransformComponent>
                                <img
                                    onLoad={(e) => {
                                        store.dispatch({ type: `CAMERA/ERROR`, error: false })
                                    }}
                                    onError={(e) => {
                                        store.dispatch({ type: `CAMERA/ERROR`, error: true })
                                    }}
                                    className={classes.panPincher}
                                    src={currentPhoto}
                                    alt={`Current`} />
                            </TransformComponent>
                            : null}
                    </React.Fragment>
                )}
            </TransformWrapper>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
