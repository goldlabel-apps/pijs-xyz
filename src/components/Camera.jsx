import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
} from '@material-ui/core/'
import { Icon } from './'

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(),
    },
    content: {
        // border: '1px solid red',
        height: 450,
    },

}));

export default function Camera() {
    const classes = useStyles();
    const showActions = false;
    return (
        <Card className={classes.card} variant="outlined">
            <CardHeader
                title={`Camera`}
                avatar={<Icon icon={`camera`} />}
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

            </CardContent>

            {showActions ?
                <CardActions>
                    <Button
                        variant={`contained`}
                        color={`secondary`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('focus camera')
                        }}>
                        Focus
                </Button>
                </CardActions>
                : null}



        </Card>
    );
}
