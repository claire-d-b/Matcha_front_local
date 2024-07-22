import React from 'react'
import TextField from '@mui/material/TextField';


interface ComponentProps {
    opts: any
    type: any
    size: any
    variant: any 
    label: any
}


const _: React.FC<ComponentProps> = ({ opts, type, size, variant, label}) => {
    return (
        <TextField className={opts} type={type} size={size} variant={variant} label={label} />
    );
};

export default _