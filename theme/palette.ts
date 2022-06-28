import { alpha } from '@mui/material/styles'

const PRIMARY = {
  light: '#4AB4D8',
  main: '#036CD1',
  dark: '#0128A6',
}

const actionColor = (opacity: number): string => (
  alpha(PRIMARY.main, opacity)
)

const COMMON = {
  primary: { ...PRIMARY, contrastText: '#FFFFFF' },
  action: {
    hover: actionColor(0.9),
    hoverOpacity: 0.9,
    selected: actionColor(0.08),
    selectedOpacity: 0.08,
    focus: actionColor(0.30),
    focusOpacity: 0.30,
  }
}

const palette = {
  ...COMMON,
  action: { ...COMMON.action }
}


export default palette