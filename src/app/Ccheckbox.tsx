import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface ComponentProps {
    className?: any
    values: string[]
    setFilter: Function
}

const _: React.FC<ComponentProps> = ({ className, values, setFilter }) => {
  return (
    <div className='text-gray-800'>
        <div className="pb-4 pt-4">Filter by</div>
        <FormGroup row className={className}>
    { values.length && values.map((v,i) =>
        <FormControlLabel key={`value_${i}`} control={<Checkbox onChange={e => setFilter(e,i)} />} label={v} />
    )}
        </FormGroup>
    </div>
  );
}

export default _
