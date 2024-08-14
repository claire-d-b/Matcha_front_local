import React from 'react'
import TextField from '@mui/material/TextField';


interface ComponentProps {
    opts: any
    type: any
    size: any
    variant: any 
    label?: any
    value?: any
    multiline: any
    rows?: any
    placeholder?: any
    onChange?: any
    onMouseDown?: any
    disabled?: any
    required?: any
}


const _: React.FC<ComponentProps> = ({ opts, type, size, variant, label, value, multiline, rows, placeholder, onChange, onMouseDown, disabled, required }) => {
    return (
        <TextField className={opts} type={type} size={size} variant={variant} label={label} value={value} multiline={multiline} rows={rows} placeholder={placeholder} onChange={onChange} onMouseDown={onMouseDown} disabled={disabled ? true : false} required={required} />
    );
};

export default _