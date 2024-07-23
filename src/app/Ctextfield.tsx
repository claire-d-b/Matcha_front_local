import React from 'react'
import TextField from '@mui/material/TextField';


interface ComponentProps {
    opts: any
    type: any
    size: any
    variant: any 
    label: any
    multiline: any
    rows?: any
}


const _: React.FC<ComponentProps> = ({ opts, type, size, variant, label, multiline, rows }) => {
    return (
        <TextField className={opts} type={type} size={size} variant={variant} label={label} multiline={multiline} rows={rows} />
    );
};

export default _