import React from 'react';
import { useSelector } from 'react-redux';
import {
    Button,
    Dialog,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { getStore } from '../';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Icon } from './';
// import moment from 'moment';

const useStyles = makeStyles(theme => ({
    done: {
        margin: theme.spacing(2),
    },
}));

function Connection() {
    const store = getStore();
    const classes = useStyles();
    const { system } = useSelector(state => state);
    const {
        connectionOpen
    } = system;
    return (
        <React.Fragment>
            <Dialog
                fullScreen={false}
                open={connectionOpen}
                onClose={() => { }}
                aria-labelledby="responsive-dialog-title"
            >
                connectionOpen {connectionOpen.toString()}

                <Button
                    className={classes.done}
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault();
                        store.dispatch({
                            type: `SYSTEM/DIALOG/CONNECTION`,
                            open: false
                        });
                    }}
                >OK</Button>
            </Dialog>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Connection);
export default MemodFuncComponent;
