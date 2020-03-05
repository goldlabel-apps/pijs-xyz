import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import commonStyles from '../theme/commonStyles'
import { useSelector } from 'react-redux'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import {
    Card,
    CardContent,
    // Toolbar,
    // AppBar, 
    IconButton,
} from '@material-ui/core/'
import { Icon } from './' 

const useStyles = makeStyles(theme => ({
    content: {
        maxHeight: 450,
        overflow: 'hidden'
    },
    cameraControlBar: {
        // display: 'flex',
        // border: '1px solid red',
        // alignItems: 'flex-start'
    },
    image: {
        width: '100%'
    },
    title: {
        flexGrow: 1,
    },
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

                      <IconButton 
                        edge={`start`}
                        color={`inherit`}
                        aria-label={'Pan Left'}>
                        <Icon icon={`panLeft`} />
                      </IconButton>
                      <IconButton 
                        edge={`start`}
                        color={`inherit`}
                        aria-label={'Pan Right'}>
                        <Icon icon={`panRight`} />
                      </IconButton>
                      <IconButton 
                        edge={`start`}
                        color={`inherit`}
                        aria-label={'Pan Up'}>
                        <Icon icon={`panUp`} />
                      </IconButton>
                      <IconButton 
                        edge={`start`}
                        color={`inherit`}
                        aria-label={'Pan Down'}>
                        <Icon icon={`panDown`} />
                      </IconButton>
                      <IconButton 
                        edge={`start`}
                        color={`inherit`}
                        aria-label={'Pan Left'}>
                        <Icon icon={`zoomIn`} />
                      </IconButton>
                      <IconButton 
                        edge={`start`}
                        color={`inherit`}
                        aria-label={'Pan Left'}>
                        <Icon icon={`zoomOut`} />
                      </IconButton>

            </CardContent>
        </Card>
    );
}


/*
                <AppBar position={`static`}>
                    <Toolbar className={classes.cameraControlBar}>
                    </Toolbar>
                </AppBar>

                */
