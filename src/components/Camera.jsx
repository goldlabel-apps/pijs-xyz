import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {
    CameraControls,
    CameraControls2,
} from './';

const useStyles = makeStyles(theme => ({
    camera: {
    },
    cameraImage: {
        width: '100%',
        border: `1px solid rgba(241,221,63,1)`,
    },
}));

function Camera() {
    const store = getStore();
    const classes = useStyles();
    const { camera } = useSelector(state => state);
    const {
        currentPhoto,
        error,
    } = camera;

    return (
        <div className={classes.camera}>
            <CameraControls />
            <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <TransformComponent>
                        <img
                            className={classes.cameraImage}
                            alt={`Camera`}
                            onLoad={(e) => {
                                store.dispatch({ type: `CAMERA/LOADED` })
                            }}
                            onError={(e) => {
                                store.dispatch({ type: `CAMERA/ERROR` })
                            }}

                            src={!error ? currentPhoto : `/jpg/broken.jpg`}
                        />
                    </TransformComponent>
                )}
            </TransformWrapper>
            <CameraControls2 />
        </div>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
