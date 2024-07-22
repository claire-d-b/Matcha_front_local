import React from 'react'
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/material/styles'


const textFieldStyles: SxProps<Theme> = {
    borderRadius: '8px', // Apply border-radius
    '& .MuiInputBase-root': {
      borderRadius: '8px', // Ensure border-radius applies to the input
    },
    '& .MuiInputLabel-root': {
      color: '#629c8d', // Optional: Customize label color
        '&.Mui-focused': {
        color: '#629c8d', // Label color when focused
      },
    },
    '& .MuiInputBase-input': {
      color: 'black', // Default text color
    },
    '& .MuiInputBase-input:focus': {
      color: '#629c8d', // Text color on focus
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Default border color
      },
      '&:hover fieldset': {
        borderColor: '#629c8d', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#629c8d', // Border color on focus
      },
      '& .MuiInputBase-input::placeholder': {
        color: '#629c8d', // Placeholder color
      },
      '& .MuiFormLabel-root': {
        color: '#629c8d',
      },
      '.MuiInputLabel-root': {
        color: '#629c8d', // Default label color
        transition: 'color 0.3s ease',
      },
      '.MuiInputLabel-root.Mui-focused': {
        color: '#629c8d', // Label color when focused
      },
      '& .MuiInputLabel-root': {
        color: 'gray', // Default label color
        '&.Mui-focused': {
          color: '#629c8d', // Label color when focused
        },
      },
    },
  }
  

interface ComponentProps {
    type: any
    size: any
    variant: any 
    label: any
}

const _: React.FC<ComponentProps> = ({ type, size, variant, label }) => {
    return (
        <TextField type={type} size={size} variant={variant} label={label} sx={textFieldStyles} />
    );
};

export default _