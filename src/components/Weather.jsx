import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import commonStyles from '../theme/commonStyles'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core/'
import { Icon } from './'

const useStyles = makeStyles(theme => ({
    content: {
        height: 100,
    },
    grow: {
        flexGrow: 1,
    },
    rightSide: {
        display: 'flex'
    },
    pullRight: {
        display: 'flex',
        textAlign: 'right',
    }
}));

function degToCompass(num) {
    while (num < 0) num += 360;
    while (num >= 360) num -= 360;
    let val = Math.round((num - 11.25) / 22.5);
    let arr = [
        "North",
        "North North East",
        "North East",
        "East North East",
        "East",
        "East Sout East",
        "South East",
        "Sout South East",
        "South",
        "South South West",
        "South West",
        "West South West",
        "West",
        "West North West",
        "North West",
        "North North West"
    ];
    return arr[Math.abs(val)];
}

export default function Weather() {
    const classesCommon = commonStyles();
    const classes = useStyles();
    const showActions = false;
    const {
        app,
    } = useSelector(state => state)
    const { data, error } = app.weather
    if (!data) {
        if (error) {
            return <React.Fragment>{error}</React.Fragment>
        }
        return null;
    }
    const windSpeed = `${Math.round(data.wind.speed * 3.6 * 10) /
        10} km/h`
    const windDirection = `${degToCompass(data.wind.deg)}`
    const temperature = `${Math.round((data.main.temp - 273.15) * 10) /
        10 || 0} °C`;
    const humidity = `${data.main.humidity} %`;
    const outlookIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const sunset = moment(data.sys.sunset * 1000).fromNow();
    const overview = `${data.weather[0].description || ``}`;
    const location = `Scarborough`

    return (
        <Card className={classesCommon.card} variant="outlined">
            <CardHeader
                title={`Weather in ${location}`}
                avatar={<Icon icon={`weather`} />}
                action={<IconButton
                    color={`inherit`}
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('Weather fullscreen')
                    }}>
                    <Icon icon={`fullscreen`} />
                </IconButton>}
            />
            <CardContent className={classes.content}>
                <Grid container className={classes.primaryText}>
                    <Grid item xs={5}>
                        <Typography
                            variant={`h6`}
                            className={classes.pullRight}>
                            <Avatar
                                src={outlookIcon}
                                alt={`weather outlook`}
                            />
                            {temperature}
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant={`body2`} >
                            Humidity <strong>{humidity}</strong><br />
                            Wind <strong>{windSpeed}</strong>, {windDirection}<br />
                            {overview}<br />
                            Sunset {sunset}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            {showActions ?
                <CardActions>
                    <Button
                        variant={`contained`}
                        color={`secondary`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('focus Weather')
                        }}>
                        Focus
                </Button>
                </CardActions>
                : null}
        </Card>
    );
}
