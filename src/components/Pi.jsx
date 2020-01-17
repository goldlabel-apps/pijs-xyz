import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    camera: {
    },
    screen: {
        display: 'block',
    },
    heading: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.25),
        color: 'white',
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

function Pi() {
    const store = getStore();
    const classes = useStyles();
    // let expanded = true;
    const { pi } = useSelector(state => state);
    const {
        expanded,
        updated,
        connected,
        connecting,
    } = pi;

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
                        <Icon icon={`settings`} color={`primary`} />
                        <Typography className={classes.heading}>
                            Pi
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.screen}>
                        <strong>since updated</strong>&nbsp;{Date.now() - updated}<br />
                        <strong>connecting</strong>&nbsp;{connecting ? 'yes' : 'no'}<br />
                        <strong>connected</strong>&nbsp;{connected ? 'yes' : 'no'}<br />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Pi);
export default MemodFuncComponent;
