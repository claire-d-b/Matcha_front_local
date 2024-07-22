

// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
        main: '#629c8d', // Replace with your custom blue color
        },
        secondary: {
        main: '#629c8d', // Optional: define a custom secondary color
        },
        text: {
            primary: '#ffffff', // Customize the text color
            secondary: '#ffffff', // Customize the secondary text color
        },
        background: {
            default: '#629c8d', // Customize the default background color
        },
    },
    components: {
        // Customize the OutlinedInput component
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              '& fieldset': {
                borderColor: '#629c8d', // Default border color
              },
              '&:hover fieldset': {
                borderColor: '#ffffff', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ffffff', // Border color when focused
              },
            },
          },
        },
      },
  // Optional: customize other theme properties here
});

export default theme;
