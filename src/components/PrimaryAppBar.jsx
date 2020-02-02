import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Badge } from '@material-ui/core'
import {
    Icon,
    SwitchTheme
} from './'


const useStyles = makeStyles(theme => ({
    appbar: {
        background: 'none',
        boxShadow: 'none',
        border: 'none'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'block',
        // },
    },
}));

export default function PrimaryAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    // const handleProfileMenuOpen = event => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    // const handleMobileMenuOpen = event => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar
                className={classes.appbar}
                position={`static`}
                color={`secondary`}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Home">
                        <Icon icon={`logo`} color={`inherit`} />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        PiJS.app
                    </Typography>
                    <div className={classes.grow} />
                    <SwitchTheme />
                    <IconButton
                        edge={`end`}
                        color={`inherit`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('Settings')
                        }}>
                        <Icon icon={`settings`} />
                    </IconButton>

                    <IconButton
                        edge={`end`}
                        color={`inherit`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('User Entity')
                        }}
                    >
                        <Badge badgeContent={0} color="secondary">
                            <Icon icon={`userentity`} color={`inherit`} />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}
