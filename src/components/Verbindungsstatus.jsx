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
    screen: {
        display: 'block',
    },
    heading: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.25),
        color: 'white',
    },
}));

function Verbindungsstatus() {
    const store = getStore();
    const classes = useStyles();
    // let expanded = true;
    const { pi } = useSelector(state => state);
    const {
        expanded,
        error,
        timeout,
        lastConnectSuccess,
        description,
        version,
    } = pi;
    let icon = `connected`;
    if (Date.now() - lastConnectSuccess > timeout) {
        icon = `disconnected`;
    }
    const connectionIcon = <Icon icon={icon} color={`primary`} />
    return (
        <React.Fragment>
            <ExpansionPanel
                expanded={expanded}
                onChange={(e) => {
                    store.dispatch({
                        type: `PI/TOGGLE_VERBINDUNG`,
                        payload: {
                            sache1: 123
                        }
                    })
                }}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Verbindungsstatus"
                    id="verbindungsstatus">
                    {connectionIcon}
                    <Typography className={classes.heading}>
                        Verbindungsstatus
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.screen}>
                    {error ?
                        <Typography
                            variant={`body1`} className={classes.error}>
                            PiJS {error}
                        </Typography>
                        : null}
                    <Typography
                        variant={`body1`} className={classes.chinese}>
                        {description}
                    </Typography>
                    <Typography
                        variant={`body1`} className={classes.chinese}>
                        <strong>version</strong>&nbsp;{version.toString()}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Verbindungsstatus);
export default MemodFuncComponent;
