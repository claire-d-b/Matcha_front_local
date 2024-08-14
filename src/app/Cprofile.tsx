import React, { useState, ChangeEvent } from 'react'
import { Card, CardContent, CardMedia } from '@mui/material';
import Chip from '@mui/material/Chip';
import Ctextfield from './Ctextfield'
import Cselect from './Cselect'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const lst = ['M', 'F', '-']

interface ComponentProps {
    className: any
    imagePath?: any
    name?: any
    edit?: Boolean
    required?: Boolean
}

const _: React.FC<ComponentProps> = ({ className, imagePath, name, edit}) => {
    const [profileFirstName, setProfileFirstName] = useState('')
    const [profileLastName, setProfileLastName] = useState('')
    const [profileBio, setProfileBio] = useState('')

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileFirstName(e.target.value)
    }

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileLastName(e.target.value)
    }

      const handleBioChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileBio(e.target.value)
    }
    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(l => !l)
    }

    return (
        !edit && 
        <Card className={className}>
            <div className="w-full p-8 gap-4 flex flex-col justify-center items-center">
                <CardMedia component="img" height="140" image={imagePath} alt="persona" className={className} />
                <CardContent>
                <div className="flex font-thin w-full justify-center items-center gap-2 pb-2">
                    <div className="flex w-full justify-between items-center gap-4">
                        <div className="flex justify-center items-center gap-4">
                            <div>{ name }</div>
                            <Chip label="F" variant="outlined" />
                        </div>
                        <IconButton className="bg-transparent" size="small" onClick={handleLike}>{ like ? <FavoriteIcon />:<FavoriteBorderIcon /> }</IconButton>
                    </div>
                </div>
                <div className="p-1 w-full">
                { str.slice(0, 600) + '...' }
                </div>
                </CardContent>
            </div>
        </Card>
        ||
        <Card className={className}>
            <div className="w-full p-8 gap-4 flex flex-col justify-center items-center">
                { imagePath && <CardMedia component="img" height="140" image={imagePath} alt="persona" className={className} /> }
                <CardContent className='w-full flex flex-col gap-4'>
                    <div className="flex w-full gap-2">
                        <div className="w-full"><Cselect name="Gender" list={lst} variant="outlined" /></div>
                        <Ctextfield opts="font-thin w-full" type="text" size="small" variant="outlined" label="First name" value={profileFirstName} multiline={false} onChange={handleFirstNameChange} disabled={false} required />
                        <Ctextfield opts="font-thin w-full" type="text" size="small" variant="outlined" label="Last name" value={profileLastName} multiline={false} onChange={handleLastNameChange} disabled={false} required />
                    </div>
                    <Ctextfield opts="p-1 w-full" type="text" size="small" variant="outlined" label="Biography" value={profileBio} multiline={true} rows={8} onChange={handleBioChange} disabled={false} required />
                </CardContent>
            </div>
        </Card>
  )
}

export default _