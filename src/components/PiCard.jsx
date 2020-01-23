import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    // Button,
    Card,
    // CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import { Icon } from './';
// import { getStore } from '../';
import {
    Camera,
    Weather,
} from './';

const useStyles = makeStyles(theme => ({
    screen: {
        minHeight: '100vh',
    },
    card: {
        position: 'relative',
    },
    actionBtn: {
        margin: theme.spacing(),
    }
}));


function PiCard() {
    // const store = getStore();
    const classes = useStyles();
    const { pi, userEntity } = useSelector(state => state);
    const { isMobile } = userEntity;
    
    const {
        error,
        timeout,
        lastConnectSuccess,
        location
    } = pi;

    let status =
    {
        icon: `connected`,
        color: `primary`,
        subheader: location,
    };
    if (Date.now() - lastConnectSuccess > timeout) {
        status = {
            icon: `disconnected`,
            color: `secondary`,
            subheader: `Connecting ...`,
        }
    }
    return (
        <React.Fragment>
            <div className={classes.screen}>
                <Card className={classes.card}>
                    <CardHeader
                        title={`PiJS.app`}
                        subheader={status.subheader}
                        avatar={
                            <IconButton className={classes.none}>
                                <Icon icon={`pi`} color={`primary`} />
                            </IconButton>}
                        action={
                            <IconButton className={classes.actionBtn}>
                                <Tooltip title={error}>
                                    <Icon icon={status.icon} color={status.color} />
                                </Tooltip>
                            </IconButton>}
                    />
                    {status.icon === `connected` ?
                        <CardContent>
                            <Camera />
                            {!isMobile ?
                                <Weather />
                                : null}

                        </CardContent>
                        :
                        null
                    }

                    {/* <CardActions>
                        <Button
                            variant={`contained`}
                            color={`secondary`}
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(`dicks.`)
                            }}>
                            Share
                        </Button>
                    </CardActions> */}

                </Card>

            </div>

        </React.Fragment >
    );
}

const MemodFuncComponent = React.memo(PiCard);
export default MemodFuncComponent;
