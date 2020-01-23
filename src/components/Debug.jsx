import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    debug: {
        // position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.25)',
        border: '1px solid rgba(255,255,255,0.5)',
        zIndex: 12324124,
        color: 'white',
        width: 300,
        padding: theme.spacing(),
        margin: theme.spacing(),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    ticks: {
        marginTop: theme.spacing()
    }
}));

function Debug() {
    const classes = useStyles();
    const { clockwork, userEntity } = useSelector(state => state);
    const {
        browser,
        isMobile,
        created,
        browserVersion,
        device,
        fingerprint,
        // userAgent,
        resolutionWidth,
        resolutionHeight,
        os,
        osVersion,
        ip,
        country_name,
        country_code,
        state_prov,
        district,
        city,
        zipcode,
        latitude,
        longitude,
        isEU,
        calling_code,
        country_tld,
        country_flag,
        time_zone,
        currency_name,
        currency_symbol,
        currency_code,
        languages,
    } = userEntity;

    return (
        <React.Fragment>
            <div className={classes.debug}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="userEntity-content"
                        id="userEntityContent"
                    >
                        <Typography className={classes.heading}>
                            UserEntity
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ display: 'block' }}>
                        <strong>created</strong> {created ? `${moment.unix(created / 1000).fromNow()}` : null}
                        <br />
                        <strong>fingerprint</strong> {fingerprint}<br />

                        <strong>ip</strong> {ip}<br />
                        <div>
                            <img src={country_flag} alt={`country flag`} />
                        </div>
                        <strong>country_name</strong> {country_name}<br />
                        <strong>country_code</strong> {country_code}<br />
                        <strong>state_prov</strong> {state_prov}<br />
                        <strong>latitude</strong> {latitude}<br />
                        <strong>longitude</strong> {longitude}<br />
                        <strong>state_prov</strong> {state_prov}<br />
                        <strong>calling_code</strong> {calling_code}<br />
                        <strong>country_tld</strong> {country_tld}<br />

                        <strong>time_zone</strong> {time_zone}<br />
                        <strong>calling_code</strong> {calling_code}<br />
                        <strong>country_tld</strong> {country_tld}<br />
                        <strong>district</strong> {district}<br />
                        <strong>city</strong> {city}<br />
                        <strong>zipcode</strong> {zipcode}<br />
                        <strong>currency_name</strong> {currency_name}<br />
                        <strong>currency_symbol</strong> {currency_symbol}<br />
                        <strong>currency_code</strong> {currency_code}<br />
                        <strong>languages</strong> {languages}<br />
                        <strong>isEU</strong> {isEU}<br />
                        <strong>device</strong > {device}<br />
                        <strong>isMobile</strong> {isMobile}<br />
                        {/* <strong>userAgent</strong> {userAgent}<br /> */}
                        <strong>resolutionWidth</strong> {resolutionWidth}<br />
                        <strong>resolutionHeight</strong> {resolutionHeight}<br />
                        <strong>browser</strong > {browser} {browserVersion}<br />
                        <strong>OS</strong > {os} {osVersion}<br />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Typography variant={`body2`} className={classes.ticks}>
                    ClockWork Ticks {clockwork.ticks}
                </Typography>
            </div>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Debug);
export default MemodFuncComponent;


/* <div>
    {JSON.stringify(userEntity.action, null, 3)}
</div> */

