import React, { useState, ChangeEvent } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Ctextfield from './Ctextfield'
import Cautocomplete from './Cautocomplete'
import { Button } from '@mui/material'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface ComponentProps {
    className?: any
    values: string[]
    setFilter: Function
}

export const categories = ['Sport', 'Modern Art', 'Drawing']

const _: React.FC<ComponentProps> = ({ className, values, setFilter }) => {
  const [gap, setGap] = useState(0)

const handleGap = (e: ChangeEvent<HTMLInputElement>) => {
  setGap(Number(e.target.value))
}

  return (
    <div className="text-gray-800 w-full">
        <div className="pb-4 pt-4 w-full">Filter by</div>
          <FormGroup className={className}>
          { values.length && values.map((v,i) => 
          <div className="flex">
            { i !== values.length - 1 && 
                <div key={`value_${i}`}>
                    <FormControlLabel control={<Checkbox onChange={e => setFilter(e,i)} />} label={v} />
                  <div>
                    <Ctextfield opts="font-thin w-full" type="text" size="small" variant="outlined" label="interests" value={gap} multiline={false} onChange={handleGap} disabled={false} />
                  </div>
                </div> ||
                <div key={`value_${i}`} className="w-full flex flex-col justify-center items-start">
                  <FormControlLabel control={<Checkbox onChange={e => setFilter(e,i)} />} label={v} />
                <div className="w-full">
                  <Cautocomplete className="w-full flex flex-col" categories={categories} size="small" variant="outlined" />
                </div>
              </div> }
              </div>) }
              <div className="self-end">
                <Button variant="contained" color="primary" size="small">Apply</Button>
              </div>
          </FormGroup>
    </div>
  );
}

export default _
