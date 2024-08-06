'use client';

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
            primary: '#629c8d', // Customize the text color
            secondary: '#629c8d', // Customize the secondary text color
        },
        background: {
            default: '#1f2937', // Customize the default background color
            paper: '#1f2937',   // Background color for paper elements
        },
        // box-shadow: 0px -2px 3px #808b96;
    },
    components: {
        MuiInputBase: {
          styleOverrides: {
            input: {
              fontSize: '0.90rem', // Change this to your desired font size
            },
          },
        },
        // Customize the OutlinedInput component
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: '12px',
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
        MuiTextField: {
            styleOverrides: {
              root: {
                borderRadius: '12px', // Ensure that the TextField also applies the border-radius
              },
            },
          },
        MuiFormControlLabel: {
          styleOverrides: {
            label: {
              fontSize: '0.80rem', // Change this to your desired font size
              '&.Mui-disabled': {
                color: '#629c8d', // Change this to your desired disabled color
              },
            },
          },
        },
        MuiCheckbox: {
          styleOverrides: {
            root: {
              "&.Mui-checked": {
                "&.Mui-disabled": {
                  "color": "#629c8d"
                }
              }
            }
          },
        },
        MuiChip: {
          styleOverrides: {
            label: {
              fontSize: '0.80rem', // Change this to your desired font size
              color: '#629c8d', // Change this to your desired text color
            },
          },
        },
        MuiIconButton: {
            styleOverrides: {
              root: {
                backgroundColor: '#d1d5db',
                color: '#629c8d',
                '&.Mui-disabled': {
                  color: '#629c8d', // Change this to your desired disabled text color
                },
                '&:hover': {
                  backgroundColor: '#4b5563', // Change this to your desired hover background color
                  color: '#d1d5db', // Optionally change the text color on hover
                },
                },
              },
            },
          MuiCardActionArea: {
            styleOverrides: {
              root: {
                backgroundColor: '#ffffff', // Change this to your desired background color
                '&:hover': {
                  backgroundColor: '#d1d5db', // Change background color on hover
                },
              },
            },
          },
          MuiBadge: {
            styleOverrides: {
              badge: {
                backgroundColor: '#629c8d', // Change this to your desired background color
                color: 'white', // Text color
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: '#1f2937', // Change this to your desired background color
              },
            },
          },
        MuiRating: {
          styleOverrides: {
            iconEmpty: {
              color: '#629c8d', // Color for empty icons
            },
            iconFilled: {
              color: '#629c8d', // Color for filled icons
            },
            iconHover: {
              color: '#d1d5db', // Color for icons on hover
            },
          },
        },
      }
    // Optional: customize other theme properties here
});

export default theme;
