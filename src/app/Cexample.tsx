import React, { ReactNode } from 'react'

interface ComponentProps {
    opts?: string;
    children?: ReactNode;
  }

const _: React.FC<ComponentProps> = ({ opts, children }) => {
    return <div className={opts}>
      {children}
    </div>
}

export default _