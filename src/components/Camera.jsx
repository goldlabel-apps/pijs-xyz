import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {
    CameraControls,
} from './';

const useStyles = makeStyles(theme => ({
    camera: {
        border: `1px solid red`,
    },
    panPincher: {
        width: '100%',
        borderRadius: theme.spacing(0.5),
        border: `1px solid rgba(0, 0, 0, 0.2)`,
        background: 'rgba(33, 33, 33, 1)',
    },
}));

function Camera() {
    const store = getStore();
    const classes = useStyles();
    const { camera } = useSelector(state => state);
    const {
        currentPhoto,
        // error,
    } = camera;

    return (
        <div className={classes.camera}>
            <CameraControls />
            <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <TransformComponent>
                        <img
                            alt={`Camera`}
                            onLoad={(e) => {
                                store.dispatch({ type: `CAMERA/LOADED` })
                            }}
                            onError={(e) => {
                                store.dispatch({ type: `CAMERA/ERROR` })
                            }}
                            className={classes.panPincher}
                            src={currentPhoto}
                        />
                    </TransformComponent>
                )}
            </TransformWrapper>
        </div>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
