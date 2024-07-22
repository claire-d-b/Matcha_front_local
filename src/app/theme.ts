

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
            default: '#2c2d31', // Customize the default background color
            paper: '#2c2d31',   // Background color for paper elements
        },
    },
    components: {
        // Customize the OutlinedInput component
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: '12px',
              '& fieldset': {
                borderColor: '#ffffff', // Default border color
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
        MuiTextField: {
            styleOverrides: {
              root: {
                borderRadius: '12px', // Ensure that the TextField also applies the border-radius
              },
            },
          },
        },
  // Optional: customize other theme properties here
});

export default theme;
