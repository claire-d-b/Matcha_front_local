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
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Ctextfield from './Ctextfield'
import Cchip from './Cchip'
import CloseIcon from '@mui/icons-material/Close';

const messages = ['un message']
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


interface ComponentProps {
    className: any
}


const _: React.FC<ComponentProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <div className={className}>
        { messages.length && <Badge badgeContent={1} overlap="circular" className="text-gray-400">
          <IconButton className="font-thin border bg-gray-800"><MailOutlineIcon className="text-base md:text-2xl text-white" /></IconButton>
          </Badge> }
        <IconButton className="font-thin border bg-gray-800" onClick={handleOpen}><Settings className="text-base md:text-2xl text-white"/></IconButton>
          <Modal className="shadow-lg" open={open}>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-col self-center bg-gray-800 rounded-lg p-2 md:p-8 w-4/5 md:w-1/2">
                  <IconButton className="self-end text-white bg-gray-800" size="small" onClick={handleClose}><CloseIcon /></IconButton>
                  <div className="p-1 w-2/3">
                    <Ctextfield opts="text-xs" type="text" size="small" variant="outlined" label="Name" multiline={false} placeholder="Julie H." />
                  </div>
                  <div className="p-1 w-2/3">
                    <Ctextfield opts="w-full" type="text" size="small" variant="outlined" multiline={true} rows={4} placeholder={ str.slice(0, 600) + '...' } />
                  </div>
                  <div className="p-1 w-2/3">
                    <Cchip opts="bg-gray-700" />
                  </div>
                  <Button className="self-end rounded-lg" variant="contained" color="primary">Save</Button>
                </div>
            </div>
        </Modal>
        <IconButton className="font-thin border bg-gray-800"><Logout className="text-base md:text-2xl text-white" /></IconButton>
        <Avatar className="text-sm md:text-xl md:pt-1 bg-gray-300 ">C</Avatar>
      </div>
    </React.Fragment>
  );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default _