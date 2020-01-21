import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Fab,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    heading: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.25),
        color: 'white',
    },
    lux: {
        position: 'absolute',
        borderRadius: theme.spacing(0.5),
        top: theme.spacing(11),
        fontSize: '0.8rem',
        left: theme.spacing(4),
        zIndex: 12345,
        background: 'rgba(0,0,0,0.5)',
        padding: theme.spacing(0.5),
        color: 'white',
    },
    tools: {
        position: 'absolute',
        left: theme.spacing(3),
        bottom: 0,
        zIndex: 1234,
    },
    panPincher: {
        // maxHeight: 500,
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
    const { camera, pimoroni } = useSelector(state => state);
    const {
        expanded,
        currentPhoto,
        error
    } = camera;
    const { lux } = pimoroni;
    // console.log('pimoroni', pimoroni.lux)

    return (
        <React.Fragment>
            <ExpansionPanel
                expanded={expanded}
                onChange={() => {
                    store.dispatch({ type: `CAMERA/TOGGLE_EXPAND` })
                }}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Camera"
                    id="camera">
                    <Icon icon={`camera`} color={`primary`} />
                    <Typography className={classes.heading}>
                        Camera
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.screen}>
                    <TransformWrapper>
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                                {expanded ?
                                    <React.Fragment>
                                        <Typography className={classes.lux}>
                                            {lux} lumens per square meter
                                        </Typography>
                                        <div className={classes.tools}>
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
                                            <Fab
                                                className={classes.zoomButton}
                                                size={`small`}
                                                color={`secondary`}
                                                onClick={resetTransform}>
                                                <Icon icon={`reset`} color={`primary`} />
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
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
