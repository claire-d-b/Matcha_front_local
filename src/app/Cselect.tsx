import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ComponentProps {
  className?: string;
  name: string;
  list: string[];
  value?: any;
  onChange?: any;
  variant: any;
  required?: any;
}

const _: React.FC<ComponentProps> = ({
  className,
  name,
  list,
  value,
  onChange,
  variant,
  required,
}) => {
  const [selectValue, setSelectValue] = React.useState("F");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth className={className} required={required}>
        <div>
          <InputLabel>{name}</InputLabel>
        </div>
        <Select
          size="small"
          value={selectValue}
          label={name}
          variant={variant}
          onChange={handleChange}
          required={required}
        >
          {list.length &&
            list.map((l, i) => (
              <MenuItem key={`list${i}`} value={l}>
                {l}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default _;
