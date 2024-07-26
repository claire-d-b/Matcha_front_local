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
  return (
    <React.Fragment>
      <div className={className}>
        { messages.length && <Badge badgeContent={1} overlap="circular" className="text-gray-400">
          <IconButton className="font-thin border bg-gray-800"><MailOutlineIcon className="text-base md:text-2xl text-white" /></IconButton>
          </Badge> }
        <IconButton className="font-thin border bg-gray-800"><Settings className="text-base md:text-2xl text-white"/></IconButton>
        <IconButton className="font-thin border bg-gray-800"><Logout className="text-base md:text-2xl text-white" /></IconButton>
        <Avatar className="text-sm md:text-xl md:pt-1 bg-gray-300 ">C</Avatar>
      </div>
    </React.Fragment>
  );
}

export default _