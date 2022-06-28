import React from 'react'
import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
  createTheme, ThemeOptions,
} from '@mui/material'
import { CssBaseline, responsiveFontSizes, GlobalStyles } from '@mui/material'
import palette from './palette'
import Overrides from './overrides'
import typography from './typography'

type ThemeProviderProps = {
  children: React.ReactNode
}

export default function ThemeProvider({ children } : ThemeProviderProps) {
  const themeOptions: ThemeOptions = {
    palette: palette,
    typography: typography
  }

  let theme = createTheme(themeOptions)
  theme = responsiveFontSizes(theme)

  theme.components = Overrides()

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            main: {
              backgroundColor: "#f8f8f8",
              marginTop: '120px'
            }
          }}
        />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}