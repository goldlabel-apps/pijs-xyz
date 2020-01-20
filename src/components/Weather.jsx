import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Grid,
    Typography,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    heading: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.25),
        color: 'white',
    },

}));

function Weather() {
    const store = getStore();
    const classes = useStyles();
    const { weather } = useSelector(state => state);
    const {
        expanded,
        error,
        windSpeed,
        windDirection,
        temperature,
        humidity,
        overview,
        outlookIcon,
        // sunrise,
        // sunset
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

                    {error ?
                        <Typography
                            variant={`body1`} className={classes.error}>
                            Weather {error}
                        </Typography>
                        : null}

                    <Grid container>
                        <Grid item xs={3}>
                            <Avatar src={outlookIcon} alt={`weather outlook`} />
                            <Typography
                                variant={`h6`} className={classes.chinese}>
                                {temperature}
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography
                                variant={`body1`} className={classes.chinese}>

                                {overview}<br />
                                <strong>Wind Speed</strong>&nbsp;{windSpeed}<br />
                                <strong>Wind Direction</strong>&nbsp;{windDirection}<br />

                                <strong>Humidity</strong>&nbsp;{humidity}<br />

                                {/* <strong>Sunrise</strong>&nbsp;{sunrise}<br />
                        <strong>Sunset</strong>&nbsp;{sunset}<br /> */}


                            </Typography>

                        </Grid>
                    </Grid>








                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Weather);
export default MemodFuncComponent;
