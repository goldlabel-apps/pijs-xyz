import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import commonStyles from '../theme/commonStyles'
import {
    Card,
    CardContent,
    CardHeader,
} from '@material-ui/core/'
import mapboxgl from 'mapbox-gl'

const useStyles = makeStyles(theme => ({
    map: {
        height: 275,
    }
}));

export default function Map() {
    const classesCommon = commonStyles();
    const classes = useStyles()
    const [map, setMap] = useState(null)
    const mapContainer = useRef(null)
    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: `mapbox://styles/listingslab/ck64doqiq0l2b1ir0995szolj`,
                center: [153.107658, -27.211579],
                zoom: 6
            });
            map.on(`load`, (e) => {
                setMap(map);
                map.resize();
            });
        };
        if (!map) initializeMap({ setMap, mapContainer });
    }, [map])

    return (
        <Card className={classesCommon.card} variant="outlined">
            <CardHeader
                title={`It is night time in Brisbane`}
            />
            <CardContent>
                <div
                    className={classes.map}
                    ref={el => (mapContainer.current = el)}
                />
            </CardContent>
        </Card>
    );
}
