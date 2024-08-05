import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface ComponentProps {
    className?: string
    categories: any
  }

  const _: React.FC<ComponentProps> = ({ className, categories }) => {
return (
  <Autocomplete className={className} multiple limitTags={5} options={categories} getOptionLabel={(option) => option.firstname+' '+option.lastname} defaultValue={[categories[0], categories[2]]}
      renderInput={(params) => (
        <TextField {...params} label="Search" placeholder="Search by name" />
      )}
    />
  );
}

export default _