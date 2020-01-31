import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { themeLight } from './theme/mui.js'
import { Shell } from './components'

export default function App() {
    return (
        <MuiThemeProvider theme={createMuiTheme(themeLight)}>
            <Shell />
        </MuiThemeProvider>
    )
}
