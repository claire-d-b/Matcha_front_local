'use client';

import React, { ReactNode } from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Badge from '@mui/material/Badge';
import theme from './theme'

const messages = ['un message']

interface ComponentProps {
    className: any
}

const _: React.FC<ComponentProps> = ({ className }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div className={className}>
        { messages.length && <Badge badgeContent={1} overlap="circular" className="text-gray-400">
          <IconButton className="font-thin border bg-gray-600"><MailOutlineIcon className="text-base md:text-2xl text-gray-300" /></IconButton>
          </Badge> }
        <IconButton className="font-thin border bg-gray-600"><Settings className="text-base md:text-2xl text-gray-300"/></IconButton>
        <IconButton className="font-thin border bg-gray-600"><Logout className="text-base md:text-2xl text-gray-300" /></IconButton>
        <Avatar className="text-sm md:text-xl md:pt-1">C</Avatar>
      </div>
    </React.Fragment>
  );
}

export default _