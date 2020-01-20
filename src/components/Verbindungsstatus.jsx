import React from 'react';
// import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Tooltip,
} from '@material-ui/core/';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    btn: {
        // border: '1px solid gold',
        display: 'block',
        marginTop: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        width: theme.spacing(6),
        height: theme.spacing(6),
    },

}));

function Verbindungsstatus() {
    // const store = getStore();
    const classes = useStyles();
    const { pi } = useSelector(state => state);
    const {
        // error,
        timeout,
        lastConnectSuccess,
    } = pi;
    let status = `connected`;
    if (Date.now() - lastConnectSuccess > timeout) {
        status = `disconnected`;
    }
    const connectionIcon = <Icon icon={status} color={`primary`} />;

    let info = `Verbindung...`
    if (status === `connected`) {
        info = `Verbindung: CONNECTED :)`;
    } else if (status === `disconnected`) {
        info = `Verbindung: DISCONNECTED :(`;
    }

    return (
        <React.Fragment>
            <Tooltip title={info}>
                <IconButton
                    className={classes.btn}
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    {connectionIcon}
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Verbindungsstatus);
export default MemodFuncComponent;
