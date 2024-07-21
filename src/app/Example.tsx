import React from 'react'

interface ComponentProps {
    opts: string;
  }

const _: React.FC<ComponentProps> = ({ opts }) => {
    return <div className={opts}>Hello World</div>
}

export default _