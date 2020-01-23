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
    panPincher: {
        width: '100%',
        borderRadius: theme.spacing(0.5),
        border: `1px solid rgba(0, 0, 0, 0.2)`,
        background: 'rgba(33, 33, 33, 1)',
    },
    tools: {
        marginTop: theme.spacing(),
    },
    zoomButton: {
    },
    iconPusher: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing()
    }

}));

function Camera() {
    const store = getStore();
    const classes = useStyles();
    const { camera, userEntity } = useSelector(state => state);
    const { isMobile } = userEntity;
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
                                <div className={classes.tools}>
                                    <Button
                                        variant={`contained`}
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`secondary`}
                                        onClick={resetTransform}>
                                        <Icon icon={`reset`} color={`inherit`} />
                                        {!isMobile ? <span className={classes.iconPusher}>Reset</span> : null}
                                    </Button>
                                    <Button
                                        variant={`contained`}
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`secondary`}
                                        onClick={zoomIn}>
                                        <Icon icon={`zoomin`} color={`inherit`} />
                                        {!isMobile ? <span className={classes.iconPusher}>Zoom In</span> : null}
                                    </Button>
                                    <Button
                                        variant={`contained`}
                                        className={classes.zoomButton}
                                        size={`small`}
                                        color={`secondary`}
                                        onClick={zoomOut}>
                                        <Icon icon={`zoomout`} color={`inherit`} />
                                        {!isMobile ? <span className={classes.iconPusher}>Zoom Out</span> : null}
                                    </Button>
                                </div>
                            </React.Fragment>
                            : null}

                    </React.Fragment>
                )}
            </TransformWrapper>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
