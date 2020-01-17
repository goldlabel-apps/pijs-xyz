import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    camera: {
    },
    screen: {
    },
    heading: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.25)
    },
    tools: {
        position: 'absolute',
        left: theme.spacing(4),
        bottom: theme.spacing(4),
        zIndex: 1234,
    },
    panPincher: {
        textAlign: 'center',
        width: '100%'
    }
}));

function Camera() {
    const store = getStore();
    const classes = useStyles();
    // let expanded = true;
    const { camera } = useSelector(state => state);
    const { expanded } = camera;

    return (
        <React.Fragment>
            <div className={classes.camera}>
                <ExpansionPanel
                    expanded={expanded}
                    onChange={(e) => {
                        // console.log('onChange', expanded)
                        store.dispatch({ type: `CAMERA/TOGGLE/EXPAND` })
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
                                    <div className={classes.tools}>
                                        <IconButton
                                            variant={`contained`}
                                            color={`primary`}
                                            onClick={zoomIn}>
                                            <Icon icon={`zoomin`} color={`primary`} />
                                        </IconButton>
                                        <IconButton
                                            variant={`contained`}
                                            color={`primary`}
                                            onClick={zoomOut}>
                                            <Icon icon={`zoomout`} color={`primary`} />
                                        </IconButton>
                                        <IconButton
                                            variant={`contained`}
                                            color={`primary`}
                                            onClick={resetTransform}>
                                            <Icon icon={`reset`} color={`primary`} />
                                        </IconButton>
                                    </div>
                                    <TransformComponent>
                                        <img
                                            className={classes.panPincher}
                                            src="/jpg/current-photo.jpg"
                                            alt="test" />
                                    </TransformComponent>
                                </React.Fragment>
                            )}
                        </TransformWrapper>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
