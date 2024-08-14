import React, { useState, ChangeEvent } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Ctextfield from './Ctextfield'
import Cautocomplete from './Cautocomplete'


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
    <div className={className}>
        <div className="text-white p-4 flex gap-2 justify-start items-center">Filter by</div>
          <FormGroup row className={className}>
          { values.length && values.map((v,i) =>
          <div className="flex gap-4 m-2">
            { i !== values.length - 1 && 
                <div key={`value_${i}`}>
                    <FormControlLabel control={<Checkbox onChange={e => setFilter(e,i)} />} label={v} />
                  <div>
                    <Ctextfield opts="font-thin w-full" type="text" size="small" variant="outlined" label="interests" value={gap} multiline={false} onChange={handleGap} disabled={false} />
                  </div>
                </div> ||
                <div key={`value_${i}`} className="w-full flex flex-col justify-center items-start gap-2">
                  <FormControlLabel control={<Checkbox onChange={e => setFilter(e,i)} />} label={v} />
                <div className="w-full">
                  <Cautocomplete className="w-full flex flex-col" categories={categories} size="small" />
                </div>
              </div> }
              </div>) }
          </FormGroup>
    </div>
  );
}

export default _
