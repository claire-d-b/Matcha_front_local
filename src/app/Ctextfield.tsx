import React from 'react'
import TextField from '@mui/material/TextField';


interface ComponentProps {
    type: any
    size: any
    variant: any 
    label: any
}


const _: React.FC<ComponentProps> = ({ type, size, variant, label}) => {
    return (
        <TextField type={type} size={size} variant={variant} label={label} />
    );
};

export default _