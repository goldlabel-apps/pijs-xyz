import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    app: {
        // border: '1px solid green',
        height: '100vh',
        background: 'rgba(0,0,0,0.01)',
    },
    appInner: {
        margin: 8
    },
}));

export default function App() {
    const classes = useStyles();
    const {
        entity,
    } = useSelector(state => state);
    // console.log(entity)
    // https://www.npmjs.com/package/react-countdown-circle-timer
    return (
        <div className={classes.app}>
            <div className={classes.appInner}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta condimentum erat vitae venenatis. Phasellus aliquam ligula augue, non ultrices elit ultricies et. In eu mattis orci, id dapibus lorem. In ornare, magna sit amet venenatis bibendum, elit neque convallis tortor, sit amet ornare neque dolor quis metus. Nam ex nunc, condimentum et arcu in, varius luctus nisi. Donec vehicula bibendum eros, convallis finibus justo egestas sit amet. Nulla cursus lorem ligula, at eleifend turpis luctus non. Sed molestie elit eget ultrices tristique. Vestibulum nec eros nisi. Praesent vestibulum porttitor urna nec ultricies. Nulla facilisi. Mauris non risus consequat, commodo tellus sed, hendrerit arcu. Aenean fermentum neque non velit molestie, sit amet dapibus est dapibus. Cras fringilla sem a placerat dignissim. Mauris vestibulum quis ex at aliquet. Vestibulum eu lectus nec est posuere aliquet nec semper leo.</p>
            </div>
        </div>
    );
}
