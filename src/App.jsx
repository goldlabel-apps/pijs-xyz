import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { themeLight } from './theme/mui.js'
import {
    ClockWork,
    Shell
} from './components'

export default function App() {
    return (
        <MuiThemeProvider theme={createMuiTheme(themeLight)}>
            <ClockWork />
            <Shell />
        </MuiThemeProvider>
    )
}
