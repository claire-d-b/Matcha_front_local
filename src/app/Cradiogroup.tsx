import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface ComponentProps {
    className?: any
    values: string[]
    setSort: Function
}

const _: React.FC<ComponentProps> = ({ className, values, setSort }) => {
  return (
    <FormControl className={className}>
      <FormLabel className="text-gray-800 p-4">Sort by</FormLabel>
      <RadioGroup className="pl-4" row onChange={(e,i) => setSort(e,i)}>
        { values.length && values.map((v,i) => 
        <FormControlLabel value={v} control={<Radio />} label={v} />
        )}
      </RadioGroup>
    </FormControl>
  );
}

export default _
