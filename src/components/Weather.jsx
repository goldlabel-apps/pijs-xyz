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
}));

function Weather() {
    const store = getStore();
    const classes = useStyles();
    // let expanded = true;
    const { weather } = useSelector(state => state);
    const {
        expanded,
        error,
    } = weather;
    return (
        <React.Fragment>
            <ExpansionPanel
                expanded={expanded}
                onChange={(e) => {
                    store.dispatch({ type: `WEATHER/TOGGLE_EXPAND` })
                }}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Weather"
                    id="weather">
                    <Icon icon={'weather'} color={`primary`} />
                    <Typography className={classes.heading}>
                        Weather
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.screen}>
                    ksahd
                    {error ?
                        <Typography
                            variant={`body1`} className={classes.error}>
                            Weather {error}
                        </Typography>
                        : null}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Weather);
export default MemodFuncComponent;
