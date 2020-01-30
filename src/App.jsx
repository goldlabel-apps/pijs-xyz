import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    app: {
        // border: '1px solid green',
        height: '100vh',
        background: 'rgba(0,0,0,0.1)'
    },
}));

export default function App() {
    const classes = useStyles();
    const {
        entity,
    } = useSelector(state => state);
    console.log(entity)
    // https://www.npmjs.com/package/react-countdown-circle-timer
    return (
        <div className={classes.app}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta condimentum erat vitae venenatis. Phasellus aliquam ligula augue, non ultrices elit ultricies et. In eu mattis orci, id dapibus lorem. In ornare, magna sit amet venenatis bibendum, elit neque convallis tortor, sit amet ornare neque dolor quis metus. Nam ex nunc, condimentum et arcu in, varius luctus nisi. Donec vehicula bibendum eros, convallis finibus justo egestas sit amet. Nulla cursus lorem ligula, at eleifend turpis luctus non. Sed molestie elit eget ultrices tristique. Vestibulum nec eros nisi. Praesent vestibulum porttitor urna nec ultricies. Nulla facilisi. Mauris non risus consequat, commodo tellus sed, hendrerit arcu. Aenean fermentum neque non velit molestie, sit amet dapibus est dapibus. Cras fringilla sem a placerat dignissim. Mauris vestibulum quis ex at aliquet. Vestibulum eu lectus nec est posuere aliquet nec semper leo.</p>
            <p>Phasellus tellus dolor, tempor vitae ex et, gravida mollis leo. Nunc ac placerat purus. Sed luctus dui tortor, in ornare ante mollis id. Vestibulum venenatis, justo ut aliquam convallis, nulla lectus laoreet leo, ut commodo sem ligula sit amet sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean hendrerit magna a ornare tristique. Vestibulum id mauris ligula. Cras eget laoreet purus. Mauris faucibus ligula ligula, quis sagittis risus vulputate eget. Ut pharetra feugiat elit vitae ultricies. Curabitur at ex ullamcorper odio ornare porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus tellus leo, euismod eu ultricies eu, mollis sed dui. Phasellus blandit orci vehicula erat iaculis, ut tincidunt sem accumsan. Sed fringilla, dui vitae eleifend euismod, purus dui mollis urna, vitae gravida magna mi quis urna.</p>
        </div>
    );
}
