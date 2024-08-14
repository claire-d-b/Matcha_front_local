'use client'

import React, { useState, useEffect, ChangeEvent } from 'react'
import { ThemeProvider, Paper, Button } from '@mui/material'
import Ctitle from './Ctitle'
import Cnav from './Cnav'
import Cupload from './Cupload'
import Image from 'next/image'
import LeafImage from '../../public/images/leaf.png'
import theme from './theme'
import Cstepper from './Cstepper'
import Cprofile from './Cprofile'
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


    return (
        <div className="h-full w-full rounded-lg p-8">
                    <div className="flex flex-col gap-8 h-full">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6">

                <div className="text-sm font-thin mb-4">Add up to 5 pictures. They will be visible by other users.</div>
                <Cupload name="Upload picture"/>
            </div>
            </div>
        </div>
    )
}

export default _