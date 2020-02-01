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
        height: 200,
    },
}));

export default function Map() {
    const classes = useStyles();
    const showActions = false;
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
