'use client'

import { createTheme } from '@mui/system';


const theme = createTheme({
  palette: {
    primary: {
      main: '#629c8d',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#629c8d',
      light: '#629c8d',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#629c8d',
    },
  },
});


export default theme