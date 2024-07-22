import * as React from 'react';
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
        <div className="font-thin">Contact</div>
        <div className="font-thin">Profile</div>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar className="pt-1" sx={{ width: 32, height: 32 }}>C</Avatar>
          </IconButton>
        </Tooltip>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            border: '1px solid white',
            borderRadius: '8px',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} className="text-sm font-thin">
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose} className="text-sm font-thin">
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className="text-sm font-thin">
          <ListItemIcon>
            <PersonAdd fontSize="small" className="text-sm text-gray-400" />
          </ListItemIcon>
          Add another account
        </MenuItem >
        <MenuItem onClick={handleClose} className="text-sm font-thin">
          <ListItemIcon>
            <Settings fontSize="small" className="text-gray-400" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} className="text-sm font-thin">
          <ListItemIcon>
            <Logout fontSize="small" className="text-gray-400" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default _