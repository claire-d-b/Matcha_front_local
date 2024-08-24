import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

interface ComponentProps {
  className?: any;
  rating: number;
  precision: number;
  setPoints?: any;
}

const _: React.FC<ComponentProps> = ({
  className,
  rating,
  setPoints,
  precision,
}) => {
  const [value, setValue] = React.useState<number | null>(rating);

  return (
    <div>
      <div className="mb-4">Fame rating</div>
      <Rating
        className="border-gray-600"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (setPoints) setPoints(newValue);
        }}
        precision={precision}
        readOnly
      />
    </div>
  );
};

export default _;
