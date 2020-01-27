import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Menu,
    ListItem,
    ListItemText,
} from '@material-ui/core/';
import { Icon } from './';

const effects = [
    {
        label: `No Effect`,
        slug: `none`
    },
    {
        label: `Emboss`,
        description: `Crazy Terminator Style`,
        slug: `emboss`
    },
    {
        label: `Negative`,
        description: `Inverts the image colours`,
        slug: `negative`
    },
    {
        label: `Cartoon`,
        description: `Not fully implemented`,
        slug: `cartoon`
    },
]

const useStyles = makeStyles(theme => ({
    flex: {
        display: 'flex',
    },
    effectsTitle: {
        color: 'white',
    },
    btnTxt: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing()
    }
}));

export default function EffectsMenu() {
    const store = getStore();
    const { camera } = useSelector(state => state);
    const { effect } = camera;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.menu}>

            <div className={classes.flex}>
                <Button
                    variant={`text`}
                    color={`secondary`}
                    onClick={handleClick}
                    aria-label="effects"
                    aria-controls="effects-menu"
                    aria-haspopup="true"
                >
                    <Icon icon={`effect`} color={`inherit`} />
                    <span className={classes.btnTxt}>
                        {effect.label !== 'None' ? `${effect.label}` : `Select Effect`}
                    </span>
                </Button>
            </div>
            <Menu
                id="effects-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: 200,
                    },
                }}>
                {effects.map((option, i) => (
                    <ListItem
                        button
                        divider
                        key={`option_${i}`}
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({
                                type: `CAMERA/EFFECT`,
                                effect: option,
                            })
                            handleClose();
                        }}
                    >
                        <ListItemText
                            primary={option.label}
                            secondary={option.description}
                        />

                    </ListItem>
                ))}
            </Menu>
        </div>
    );
}
