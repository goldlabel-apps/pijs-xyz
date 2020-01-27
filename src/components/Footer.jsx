import React from 'react';
// import { getStore } from '../';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    footer: {
        border: 'none',
        boxShadow: 'none',
    },

    appBar: {
        top: 'auto',
        bottom: 0,
        background: 'none',
    },
    iconPusher: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing()
    },
    grow: {
        flexGrow: 1,
    },
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>

            <Tooltip title={`by listingslab`}>
                <IconButton
                    className={classes.connectionBtn}
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    <Icon icon={`spade`} color={`primary`} />
                </IconButton>
            </Tooltip>



        </div>
    );
}

const MemodFuncComponent = React.memo(Footer);
export default MemodFuncComponent;

/*
<Button
            variant={`contained`}
            className={classes.zoomButton}
            size={`small`}
            color={`secondary`}
            onClick={() => { }}>
            <Icon icon={`reset`} color={`inherit`} />
            {!isMobile ? <span className={classes.iconPusher}>Reset</span> : null}
        </Button>

        <Button
            variant={`contained`}
            className={classes.zoomButton}
            size={`small`}
            color={`secondary`}
            onClick={() => { }}>
            <Icon icon={`zoomin`} color={`inherit`} />
            {!isMobile ? <span className={classes.iconPusher}>Zoom In</span> : null}
        </Button>

        <Button
            variant={`contained`}
            className={classes.zoomButton}
            size={`small`}
            color={`secondary`}
            onClick={() => { }}>
            <Icon icon={`zoomout`} color={`inherit`} />
            {!isMobile ? <span className={classes.iconPusher}>Zoom Out</span> : null}
        </Button>
        */