import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
} from '@material-ui/core/';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    tools: {
        position: 'absolute',
        right: theme.spacing(3),
        bottom: theme.spacing(),
        zIndex: 1234321,
    },
    panPincher: {
        maxWidth: '100%',
        borderRadius: theme.spacing(0.5),
        border: `1px solid rgba(0, 0, 0, 0.9)`,
        background: 'rgba(0, 0, 0, 0.8)',
    },
    zoomButton: {
        marginLeft: theme.spacing()
    },
    iconPusher: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing()
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
    // let currentPhoto = `/current-photo.jpg`;
    return (
        <React.Fragment>
            <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        {expanded ?
                            <React.Fragment>

                                <div className={classes.tools}>
                                    <Button
                                        variant={`contained`}
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`primary`}
                                        onClick={resetTransform}>
                                        <Icon icon={`reset`} color={`inherit`} />
                                        
                                        <span className={classes.iconPusher}>reset</span>
                                    </Button>
                                    <Button
                                        variant={`contained`}
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`primary`}
                                        onClick={zoomIn}>
                                        <Icon icon={`zoomin`} color={`inherit`} />
                                        <span className={classes.iconPusher}>zoomin</span>
                                    </Button>
                                    <Button
                                        variant={`contained`}
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`primary`}
                                        onClick={zoomOut}>
                                        <Icon icon={`zoomout`} color={`inherit`} />
                                        <span className={classes.iconPusher}>zoomout</span>
                                    </Button>
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
