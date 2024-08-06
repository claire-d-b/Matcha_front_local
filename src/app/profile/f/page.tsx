'use client'

import React, { useState, useEffect } from 'react'
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

const hobbies = ['Yoga', 'Drawing', 'Travel']
const preference = 'M'
const age = 30

interface Profile {
        uuid: string
        firstname: string,
        lastname: string,
        gender: string,
        sexual_preferences: string,
        pictures: string,
        biography: string,
        interests: string,
        is_online: false,
        views: null,
        likes: null,
        location: string,
        age: number,
        reported: boolean
}

const _ = () => {
    const form = {
        firstname: 'Emma',
        location: 'London',
        interests: 'arts, books, climbing, yoga, running, Cooking',
        age: 32,
        sexual_preferences: 'M'
    }
    // const [form, setForm] = useState<Profile>()
    // useEffect(() => {
    //     const fetchProfile = async (setForm: any) => {
    //         await fetch('http://127.0.0.1:5000/profile')
    //               .then(response => response.json())
    //               .then(data => setForm(data[0]));
    //     }
    // fetchProfile(setForm)}, [])

    //   console.log(form);

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col h-screen w-screen">
            <Paper className="p-4 border border-white flex w-full justify-center items-center">
                <Ctitle opts="text-lg font-light" title="Matcha" />
                <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
                <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-4 text-xs md:text-base" />
            </Paper>
                { form && <div className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-200">
                    <Cprofile imagePath="../../../images/people_f.png" name={form.firstname ?? 'First Name'} className="p-1 md:p-8 w-full bg-transparent rounded-lg" />
                    <div className="w-full p-8 gap-4 flex flex-col justify-center items-center">
                        <Paper className="p-8 rounded-lg w-full font-thin">
                            <Crating className="w-full" rating={2.5} precision={0.5} />
                        </Paper>
                        <Paper className="p-8 rounded-lg flex flex-col gap-4 w-full font-thin">
                            <div className="flex items-center justify-start gap-2">
                                <div className='font-thin text-md'>Location</div>
                                <IconButton size="small" disabled><SearchIcon /></IconButton>
                            </div>
                            <Stack direction="row" spacing={1}>
                                <Chip label="French" className="bg-gray-600 text-white" />
                                <Chip label={form.location ?? 'NA'} variant="outlined"/>
                            </Stack>
                        </Paper>
                        <Paper className="p-8 rounded-lg flex flex-wrap gap-4 w-full font-thin">
                        <div className="w-full">Interests</div>
                        { form.interests && form.interests.split(",")?.map((h,i) =>
                            <FormGroup key={`interest_${i}`}>
                                <FormControlLabel disabled control={<Checkbox defaultChecked />} label={h} />
                            </FormGroup>
                        ) }
                        </Paper>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <Paper className="p-8 rounded-lg flex flex-col gap-4 w-full md:w-1/2 font-thin justify-center items-start">
                                <div className="flex items-center justify-start gap-2 font-thin">
                                Sexual preferences
                                </div>
                                <div className="w-full flex justify-start items-center gap-2">
                                    <Chip className="self-start bg-gray-700 text-gray-800" label={`${form.age ?? 'NA'} y.o.`} variant="filled"  />
                                    <p className="text-sm font-thin">Target: </p>
                                    <Chip label={form.sexual_preferences.toUpperCase()} variant="outlined" />
                                </div>
                            </Paper>
                            <Paper className="w-full md:w-1/2 rounded-lg"><a href="/profile/picture/" className="p-8 flex w-full font-thin text-md justify-center items-start">Pictures</a></Paper>
                        </div>
                    </div>
                </div>
                }
                <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
                    Copyright
                </Paper>
            </div>
        </ThemeProvider>
    )
}

export default _