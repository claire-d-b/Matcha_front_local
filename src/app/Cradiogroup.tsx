import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { IconButton } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';

interface ComponentProps {
    className?: any
    values: string[]
    setSort: Function
}

const _: React.FC<ComponentProps> = ({ className, values, setSort }) => {
  const [sort, sortOrder] = useState(false)

  const handleSort = () => {
    sortOrder(v => !v)
    // post to backend onclick only
  }

  return (
    <FormControl className={className}>
      <FormLabel className="text-gray-800 p-4 flex gap-2 justify-start items-center">Sort by
        <IconButton className="bg-transparent" size="small" onClick={handleSort}>
          <SwapVertIcon />
        </IconButton>
        <div className="text-xs">{ sort ? 'ascending' : 'descending' }</div>
      </FormLabel>
      <RadioGroup className="pl-4" row onChange={(e,i) => setSort(e,i)}>
        { values.length && values.map((v,i) => 
        <FormControlLabel value={v} control={<Radio />} label={v} />
        )}
      </RadioGroup>
    </FormControl>
  );
}

export default _
