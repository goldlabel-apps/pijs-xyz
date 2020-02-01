import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
} from '@material-ui/core/'
import { Icon } from './'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(),
    },
    content: {
        height: 200,
    },
    aMap: {
        border: '1px solid rgba(241,221,63,0.25)',
        background: 'rgba(0,0,0,0.5)',
        height: 190,
    }
}));

export default function Map() {
    const classes = useStyles()
    const showActions = false
    // let mapOptions = {
    //     // container: this.mapContainer,
    //     // style: mapboxStyle,
    //     center: [0, 0],
    //     zoom: 10,
    //     interactive: false,
    // }
    // const map = new mapboxgl.Map(mapOptions)


    return (
        <Card className={classes.card} variant="outlined">
            <CardHeader
                title={`Map`}
                avatar={<Icon icon={`map`} />}
                action={<IconButton
                    color={`inherit`}
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('camera fullscreen')
                    }}
                >
                    <Icon icon={`fullscreen`} />
                </IconButton>}
            />
            <CardContent className={classes.content}>
                <div className={classes.aMap}></div>
            </CardContent>

            {showActions ?
                <CardActions>
                    <Button
                        variant={`contained`}
                        color={`secondary`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('focus Map')
                        }}>
                        Focus
                </Button>
                </CardActions>
                : null}
        </Card>
    );
}
