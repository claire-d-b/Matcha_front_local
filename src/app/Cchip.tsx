import react, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import Ctextfield from './Ctextfield'

const chips = ['Language', 'City']

interface ComponentProps {
    opts?: string;
  }

const _: React.FC<ComponentProps> = ({ opts }) => {
  const [chipContent, setChipContent] = useState('Default Content');
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState(chipContent);

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  }

  return (
  <div className="flex flex-wrap gap-2">
    { chips.length && chips.map((c,i) => <Chip className={opts} key={`chip_${i}`} label={c} onClick={handleEditClick} onDelete={handleDelete} />) }
  </div>
  )}

export default _