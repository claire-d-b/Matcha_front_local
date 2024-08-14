'use client'

import React, { useState, useEffect, ChangeEvent } from 'react'
import { ThemeProvider, Paper, Button } from '@mui/material'
import Ctitle from './Ctitle'
import Cnav from './Cnav'
import Image from 'next/image'
import LeafImage from '../../public/images/leaf.png'
import theme from './theme'
import Cstepper from './Cstepper'
import Ctextfield from './Ctextfield'
import Cselect from './Cselect'
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const lst = ['M', 'F', '-']

interface ComponentProps {
    required?: any
    setIsValid: any
}

const _: React.FC<ComponentProps> = ({ required, setIsValid }) => {
    const [language, setLanguage] = useState('')
    const [city, setCity] = useState('')
    const [hobbies, setHobbies] = useState([''])
    const [hobby, setHobby] = useState('')
    const [age, setAge] = useState('')

    const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLanguage(e.target.value)
    }
    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
    }

    const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value)
    }

    const handleHobby = (e: ChangeEvent<HTMLInputElement>) => {
        setHobby(e.target.value)
    }

    const addHobbies = () => {
        if (hobby.length) {
        const nhobbies = [...hobbies]
        nhobbies.push(hobby)
        setHobbies(nhobbies)
        }
    }

    const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
        const nhobbies = [...hobbies]
        nhobbies.splice(hobbies.indexOf(e.target.value), 1)
        setHobbies(nhobbies)
    }

    useEffect(() => {
        console.log("chip array has changed")
    }, [hobbies]);

    useEffect(() => {
        setIsValid(false)
        console.log(hobbies.length)
        if (!!language && !!city && hobbies.length > 1 && !!age)
            setIsValid(true)
    }, [language, city, hobbies, age]);


    return (
                <div className="h-full w-full p-8">
                    <div className="flex flex-col gap-8 h-full">
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 rounded-lg">
                            <div className="p-8 flex flex-col gap-4 w-full text-md font-thin">
                                <div className="flex items-center justify-start gap-2">
                                    <div className='font-thin text-md'>Location</div>
                                    <IconButton size="small" disabled><SearchIcon /></IconButton>
                                </div>
                                <Stack direction="row" spacing={1}>
                                    <Ctextfield opts="" type="text" size="small" variant="outlined" label="Language" value={language} multiline={false} onChange={handleLanguageChange} disabled={false} required />
                                    <Ctextfield opts="" type="text" size="small" variant="outlined" label="City" value={city} multiline={false} onChange={handleCityChange} disabled={false} required />
                                </Stack>
                            </div>
                            <div className="p-8 font-thin flex flex-col w-full justify-center items-start gap-4">
                                <div className="font-thin text-md">Interests</div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="flex flex-wrap gap-2 justify-center items-between">
                                            <Ctextfield opts="w-full self-start font-thin" type="text" size="small" variant="outlined" label={'Interest'} value={hobby} multiline={false} onChange={handleHobby} required />
                                            { hobbies.length && hobbies.map((h,i) =>
                                            <div key={`hobbies_${i}`}>
                                                    <Chip label={h} className={ i === 0 ? "bg-gray-600 text-white hidden" : "bg-gray-600 text-white" } variant="filled" onDelete={handleDelete}/>
                                            </div> )}
                                            </div>
                                            <IconButton className="mb-2 bg-gray-800" size="small" onClick={addHobbies}>
                                                <AddIcon />
                                            </IconButton>
                                            <p className="text-sm font-thin">Share your interests & hobbies.</p>
                                        </div>
                                    </div>
                                <div className="p-8 flex flex-col gap-4 w-full font-thin justify-center items-start">
                                    <div className="flex justify-center items-center gap-20">
                                        {/* <div className="flex flex-col items-start justify-start gap-4 font-thin">
                                            Sexual preferences
                                            <div className="w-full flex justify-start items-center gap-2">
                                                <Cselect className="w-full" name="Gender" list={lst} variant="outlined" />
                                            </div>
                                        </div> */}
                                        <div className="flex flex-col items-start justify-start gap-4 font-thin w-full">
                                            Preferences
                                        <div className="w-full"><Cselect name="Preferences" list={lst} variant="outlined" required /></div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 font-thin">
                                            Age
                                            <Ctextfield opts="self-start" type="text" size="small" variant="outlined" label={'Age'} value={age} multiline={false} onChange={handleAge} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
    )
}

export default _