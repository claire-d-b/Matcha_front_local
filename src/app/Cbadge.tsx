import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

interface ComponentProps {
  opts?: string;
}

const _: React.FC<ComponentProps> = ({ opts }) => {
  return (
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
  )
}

export default _