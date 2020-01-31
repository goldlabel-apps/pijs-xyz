import React from 'react'
import { useSelector } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { themeLight, themeDark } from './theme/mui.js'
import {
    ClockWork,
    Shell
} from './components'

export default function App() {
    const {
        app,
    } = useSelector(state => state)
    const { mode } = app.theme
    let theme = themeLight;
    if (mode === `dark`) {
        theme = themeDark
    }
    // console.log(mode, theme)
    return (
        <MuiThemeProvider theme={createMuiTheme(theme)}>
            <ClockWork />
            <Shell />
        </MuiThemeProvider>
    )
}
