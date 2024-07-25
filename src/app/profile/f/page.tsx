import React from 'react'
import { ThemeProvider, Paper } from '@mui/material'
import Ctextfield from '../../Ctextfield'
import Cprofile from '../../Cprofile'
import Ctitle from '../../Ctitle'
import Cnav from '../../Cnav'
import Image from 'next/image'
import TeaImage from '../../../../public/images/tea.png'
import LeafImage from '../../../../public/images/leaf.png'
import theme from '../../theme'
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const person = {
    name: 'Helena S.',
    language: 'French',
    city: 'Paris 15',
    hobbies: ['Yoga', 'Drawing', 'Travel']
}

const _ = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col h-screen w-screen">
            <Paper className="p-4 border border-white flex w-full justify-center items-center">
                <Ctitle opts="text-lg font-light" title="Matcha" />
                <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
                <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-12 text-xs md:text-base" />
            </Paper>
                <div className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-200">
                    <Cprofile imagePath="../../../images/people_f.png" name={person.name} className="p-1 md:p-8 w-full bg-transparent rounded-lg" />
                    <div className="w-full p-8 gap-4 flex flex-col justify-center items-center">
                        <Paper className="p-8 rounded-lg flex flex-col gap-4 w-full text-lg font-thin">Location
                            <Stack direction="row" spacing={1}>
                                <Chip label={person.language} className="font-normal bg-gray-600 text-white" />
                                <Chip label={person.city} variant="outlined" className="font-normal"/>
                            </Stack>
                        </Paper>
                        <Paper className="p-8 rounded-lg flex flex-col gap-4 w-full text-lg font-thin text-lg">Hobbies
                            <FormGroup>
                                <FormControlLabel disabled control={<Checkbox defaultChecked />} label={person.hobbies[0]} />
                                <FormControlLabel disabled control={<Checkbox defaultChecked />} label={person.hobbies[1]} />
                                <FormControlLabel disabled control={<Checkbox defaultChecked />} label={person.hobbies[2]} />
                            </FormGroup>
                        </Paper>
                        <Paper className="flex p-8 rounded-lg flex flex-col gap-4 w-full font-thin justify-center items-start">
                            <div className="flex items-center justify-start gap-2">
                                <div>What I am looking for...</div>
                                <IconButton size="small"><SearchIcon /></IconButton>
                            </div>
                            <div style={{ border: '1px solid #629c8d' }} className="w-full rounded-lg p-4 text-sm">{str.slice(0, 300) + '...'}</div>
                        </Paper>
                    </div>
                </div>
                <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
                    Copyright
                </Paper>
            </div>
        </ThemeProvider>
    )
}

export default _