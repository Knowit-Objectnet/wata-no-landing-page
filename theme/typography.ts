import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions = {
  fontFamily: 'Roboto, sans-serif',
  h1: {
    fontWeight: 500,
    letterSpacing: 2,
    lineHeight: 80 / 64,
  },
  h2: {
    fontWeight: 500,
    lineHeight: 64 / 48,
  },
  h3: {
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h4: {
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.5,
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: '1.1rem'
  },
  subtitle1: {
    lineHeight: 1.5,
    fontSize: '1.1rem'
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    textTransform: 'uppercase',
  },
  button: {
    textTransform: 'uppercase'
  }
}

export default typography