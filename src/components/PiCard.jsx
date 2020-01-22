import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Tooltip,
    Typography,
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
}));


function PiCard() {
    // const store = getStore();
    const classes = useStyles();
    const { pi } = useSelector(state => state);
    const {
        baseUrl,
        // ip,
        error,
        timeout,
        lastConnectSuccess,
    } = pi;
    // console.log(pi)
    let status = `connected`;
    if (Date.now() - lastConnectSuccess > timeout) {
        status = `disconnected`;
    }
    // console.log('error?', error, status);
    return (
        <React.Fragment>
            <div className={classes.screen}>
                <Card className={classes.card}>
                    <CardHeader
                        title={`PiJS.app`}
                        // subheader={`Deep stack JavaScript :)`}
                        avatar={<Avatar src={`/icon.png`} />}
                        action={
                            <IconButton>
                                <Tooltip title={error}>
                                    <Icon icon={status} color={`primary`} />
                                </Tooltip>
                            </IconButton>}
                    />
                    {/* Connected to a Raspberry Pi4 at <strong>{ip}</strong> */}
                    {status === `connected` ?
                        <CardContent>
                            <Camera />
                            <Weather />
                        </CardContent>
                        :
                        <CardContent>
                            <Typography variant={`body1`}>
                                Hmm, we're having problems connecting to <strong>{baseUrl}</strong>
                            </Typography>
                        </CardContent>
                    }

                </Card>

            </div>

        </React.Fragment >
    );
}

const MemodFuncComponent = React.memo(PiCard);
export default MemodFuncComponent;
