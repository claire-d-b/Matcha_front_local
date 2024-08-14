import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

interface ComponentProps {
    className?: string
    categories: string[]
    size: any
  }

const _: React.FC<ComponentProps> = ({ className, categories, size }) => {
  return (
    <Autocomplete className={className} multiple options={categories.map(c => c)} defaultValue={[categories[1]]} freeSolo
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip size={size} label={option} key={key} {...tagProps} />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="interests"
          />
        )}
      />)
  }

export default _