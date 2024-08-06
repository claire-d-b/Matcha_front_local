import * as React from 'react';
import Switch from '@mui/material/Switch';
import { ClassNames } from '@emotion/react';

interface ComponentProps {
  className?: string
  name: string
}

const _: React.FC<ComponentProps> = ({ className, name}) => {
  return (
    <div className={className}>
      <p>{ name }</p>
      {/* <Switch defaultChecked /> */}
      <Switch />
      {/* <Switch disabled defaultChecked />
      <Switch disabled /> */}
    </div>
  );
}

export default _
