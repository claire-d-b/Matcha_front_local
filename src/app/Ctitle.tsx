import React from 'react'

interface ComponentProps {
    opts?: string;
    title?: string;
  }

const _: React.FC<ComponentProps> = ({ opts, title}) => {
    return <div className={opts}>{title}</div>
}

export default _