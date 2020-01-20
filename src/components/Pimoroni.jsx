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
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    heading: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.25),
        color: 'white',
    },
}));

function Pimoroni() {
    const store = getStore();
    const classes = useStyles();
    const { pimoroni } = useSelector(state => state);
    const {
        expanded,
        error,
        lux,
        pressure,
        temperature,
        lastPiUpdate,
    } = pimoroni;
    return (
        <React.Fragment>
            <ExpansionPanel
                expanded={expanded}
                onChange={(e) => {
                    store.dispatch({ type: `PIMORONI/TOGGLE_EXPAND` })
                }}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Pimoroni"
                    id="pimoroni">
                    <Icon icon={'api'} color={`primary`} />
                    <Typography className={classes.heading}>
                        Pimoroni
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.screen}>

                    {error ?
                        <Typography
                            variant={`body1`} className={classes.error}>
                            pimoroni {error}
                        </Typography>
                        : null}

                    <Typography
                        variant={`body1`} className={classes.chinese}>
                        <strong>lux</strong>&nbsp;{lux}<br />
                        <strong>pressure</strong>&nbsp;{pressure}<br />
                        <strong>temperature</strong>&nbsp;{temperature}<br />
                        <strong>Enviro pHAT updated</strong>&nbsp;{moment(lastPiUpdate).fromNow()}<br />
                    </Typography>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Pimoroni);
export default MemodFuncComponent;
