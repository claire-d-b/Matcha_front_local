'use client'

import React from 'react'
import { ThemeProvider, Paper } from '@mui/material'
import Cprofile from '../../Cprofile'
import Ctitle from '../../Ctitle'
import Cnav from '../../Cnav'
import Crating from '../../Crating'
import Image from 'next/image'
import LeafImage from '../../../../public/images/leaf.png'
import theme from '../../theme'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const person = {
    name: 'Thomas V.',
    language: 'English',
    city: 'London SE1',
    hobbies: ['Climbing', 'Photography', 'Cats']
}

const hobbies = ['Volley', 'Writing', 'Cinema', 'Cooking', 'Videogames', 'Running']
const preference = 'F'
const age = 35

const _ = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col h-full w-full">
                <Paper className="p-4 border border-white flex w-full justify-center items-center">
                    <Ctitle opts="text-lg font-light" title="Matcha" />
                    <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
                    <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-4 text-xs md:text-base" />
                </Paper>
                <div className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-200">
                    <Cprofile imagePath="../../../images/people_m.png" name={person.name} className="p-1 md:p-8 w-full bg-transparent rounded-lg"/>
                    <div className="w-full p-8 gap-4 flex flex-col justify-center items-center">
                        <Paper className="p-8 rounded-lg w-full font-thin">
                            <Crating className="w-full" rating={2.0} precision={0.5} />
                        </Paper>
                        <Paper className="p-8 rounded-lg flex flex-col gap-4 w-full text-lg font-thin">
                        <div className="flex items-center justify-start gap-2">
                                <div className='font-thin text-md'>Location</div>
                                <IconButton size="small" disabled><SearchIcon /></IconButton>
                            </div>
                            <Stack direction="row" spacing={1}>
                                <Chip label={person.language} className="bg-gray-600 text-white" />
                                <Chip label={person.city} variant="outlined" />
                            </Stack>
                        </Paper>
                        <Paper className="p-8 rounded-lg flex flex-wrap gap-4 w-full text-lg font-thin text-lg">
                        <div className="w-full">Interests</div>
                        { hobbies.length && hobbies.map((h,i) =>
                            <FormGroup key={`interest_${i}`}>
                                <FormControlLabel disabled control={<Checkbox defaultChecked />} label={h} />
                            </FormGroup>
                        ) }
                        </Paper>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                        <Paper className="flex p-8 rounded-lg flex flex-col gap-4 w-full md:w-1/2 font-thin justify-center items-start">
                            <div className="flex items-center justify-start gap-2 font-thin">
                                Sexual preferences
                            </div>
                            <div className="w-full flex justify-start items-center gap-2">
                                <Chip className="self-start bg-gray-700 text-gray-800" label={`${age} y.o.`} variant="filled"  />
                                <p className="text-sm font-thin">Target: </p>
                                <Chip label={preference} variant="outlined" />
                            </div>
                        </Paper>
                        <Paper className="w-full md:w-1/2 rounded-lg"><a href="/profile/picture/" className="p-8 flex w-full font-thin text-md justify-center items-start">Pictures</a></Paper>
                        </div>
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