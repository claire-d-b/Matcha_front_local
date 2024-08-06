'use client';

import React, { ReactNode } from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Cmodal from './Cmodal'
import Link from 'next/link';
import useAuth from './services/useAuth'


const messages = ['un message']
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


interface ComponentProps {
    className: any
}


const _: React.FC<ComponentProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const auth = useAuth()

  const chips = ['Language', 'City']

  const handleSignOut = async () => {
    await auth.signout()
  }

  return (
    <React.Fragment>
      <div className={className}>
        <IconButton className="font-thin border bg-gray-800"><NotificationsIcon className="text-base md:text-2xl text-white" /></IconButton>
        { messages.length && <Badge badgeContent={1} overlap="circular" className="text-gray-400">
          <IconButton className="font-thin border bg-gray-800"><MailOutlineIcon className="text-base md:text-2xl text-white" /></IconButton>
          </Badge> }
        <IconButton className="font-thin border bg-gray-800" onClick={handleOpen}><Settings className="text-base md:text-2xl text-white"/></IconButton>
          <Cmodal className="shadow-lg overflow-scroll" open={open} onClose={handleClose} />
        <Link href="/login/"><IconButton className="font-thin border bg-gray-800" onClick={handleSignOut}><Logout className="text-base md:text-2xl text-white" /></IconButton></Link>
        <Avatar className="text-sm md:text-xl md:pt-1 bg-gray-300 ">C</Avatar>
      </div>
    </React.Fragment>
  );
}


export default _