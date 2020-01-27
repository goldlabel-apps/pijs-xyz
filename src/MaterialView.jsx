import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import muiTheme from './theme/mui'
import { useSelector, } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
    App,
} from './components'
import ClockWork from './ClockWork'

const useStyles = makeStyles(theme => ({
    app: {
        margin: 'auto',
        maxWidth: 400
    },
}))

export default function MaterialView(props) {  
    const classes = useStyles();
    let screen = `Inniting Firestore...`
    const {
        entity
    } = useSelector(state => state.firebase)
    
    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <ClockWork />
                <App />
            </MuiThemeProvider>
        </React.Fragment>
    )
}
