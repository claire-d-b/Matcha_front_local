'use client'

import React, { useState, useEffect, ChangeEvent } from 'react'
import { ThemeProvider, Paper, Button } from '@mui/material'
import Ctitle from '../Ctitle'
import Cnav from '../Cnav'
import Image from 'next/image'
import LeafImage from '../../../public/images/leaf.png'
import theme from '../theme'
import Cstepper from '../Cstepper'
import Ctextfield from '../Ctextfield'
import Cselect from '../Cselect'
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const lst = ['M', 'F', '-']

const _ = () => {
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


    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col h-full w-full bg-gray-400">
                <Paper className="p-4 border border-white flex w-full justify-center items-center">
                    <Ctitle opts="text-lg font-light" title="Matcha" />
                    <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
                    <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-4 text-xs md:text-base" />
                </Paper>
                <div className="flex w-full h-full p-12">
                    <Cstepper />
                </div>
                <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
                    Copyright
                </Paper>
            </div>
        </ThemeProvider>
    )
}

export default _