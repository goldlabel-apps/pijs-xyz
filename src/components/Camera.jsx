import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import commonStyles from '../theme/commonStyles'
import { useSelector } from 'react-redux'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import {
    Card,
    CardContent,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    content: {
        maxHeight: 450,
        overflow: 'hidden'
    },
    image: {
        width: '100%'
    }
}));

export default function Camera() {
    const classesCommon = commonStyles()
    const classes = useStyles()
    const {
        app,
    } = useSelector(state => state)
    const { src } = app.camera
    return (
        <Card className={classesCommon.card} variant="outlined">
            <CardContent className={classes.content}>
                <TransformWrapper>
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <TransformComponent>
                            <img
                                className={classes.image}
                                alt={`Camera`}
                                onLoad={(e) => {
                                    //store.dispatch({ type: `CAMERA/LOADED` })
                                }}
                                onError={(error) => {
                                    console.log(error)
                                    //store.dispatch({ type: `CAMERA/ERROR` })
                                }}
                                src={src}
                            />
                        </TransformComponent>
                    )}
                </TransformWrapper>
            </CardContent>
        </Card>
    );
}
