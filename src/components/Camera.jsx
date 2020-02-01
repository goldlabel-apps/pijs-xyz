import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import commonStyles from '../theme/commonStyles'
import { useSelector } from 'react-redux'
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
} from '@material-ui/core/'
import { Icon } from './'

const useStyles = makeStyles(theme => ({
    content: {
        height: 450,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    }

}));

export default function Camera() {
    const classesCommon = commonStyles()
    const classes = useStyles()
    const {
        app,
    } = useSelector(state => state)
    const { res, src } = app.camera
    console.log(res, src);

    return (
        <Card className={classesCommon.card} variant="outlined">
            <CardHeader
                title={`Camera`}
                avatar={<Icon icon={`camera`} />}
                action={<IconButton
                    color={`inherit`}
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('Camera Fullscreen')
                    }}
                >
                    <Icon icon={`fullscreen`} />
                </IconButton>}
            />
            <CardContent className={classes.content}>
                {/* <img
                    src={`${src}${res}`}
                    alt={`camera`}
                    className={classes.image}
                /> */}
            </CardContent>
        </Card>
    );
}
