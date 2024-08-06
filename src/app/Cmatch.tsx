'use client'

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Cupload from './Cupload'
import Cswitch from './Cswitch'
import { CardContent, CardActionArea, CardMedia } from '@mui/material'
import Pagination from '@mui/material/Pagination';

const pictures = [[], ['../../images/people_m.png', 'At the sea'], ['../../images/people_f.png', 'Home'], ['../../images/people_m.png', 'Birthday snapshot'], ['../../images/people_f.png', 'New tee-shirt'], ['../../images/people_m.png', '<3<3']]

interface ComponentProps {
    className?: string
  }

const _: React.FC<ComponentProps> = ({ className }) => {
    const [index, setIndex] = useState(1)
    const [title, setTitle] = useState('')
    const [picture, setPicture] = useState(pictures)

    const handleChange= (event: React.ChangeEvent<unknown>, value: number) => {
        setIndex(value)
    }
    const handleTitle= (event: React.ChangeEvent<unknown>, value: string) => {
        setTitle(value)
    }
    const handleDelete = (_: React.ChangeEvent<unknown>, i: number) => {
        const npicture = [...picture]
        npicture.splice(i, 1)
        setPicture(npicture)
    }

    useEffect(() => {
        // fetch pictures data and reload page here
    }, [picture]);

    return (
        <div className={className ?? "" + " w-full h-full flex flex-col"}>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className='w-full h-full'>
                <Grid container spacing={4} className="flex flex-col w-full h-full justify-center items-center p-8 gap-2" >
                    <Cupload name="Upload file"/>
                    { picture.length && 
                    <div className="flex flex-col h-full">
                        <div className="flex justify-center items-center h-full">
                            <Grid xs={2} className="md:w-1/4 hidden md:flex">
                            { index-1 > 0 && index-1 < picture.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <CardMedia component="img" image={ picture[index-1][0] } alt="persona" className="rounded-lg" />
                                    <CardContent className="text-xs md:text-sm font-thin text-gray-800">{ picture[index-1][1] }</CardContent>
                                </CardActionArea>
                            </> }
                            </Grid>
                            <Grid xs={8} className="w-full md:w-1/2">
                            { index > 0 && index < picture.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <div className="w-full text-right mb-2 mt-4">
                                        <IconButton className="bg-transparent" size="small" onClick={_ => handleDelete(_,index)}>
                                            <CloseIcon className="text-gray-800" />
                                        </IconButton>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <CardMedia component="img" image={ picture[index][0] } alt="persona" className="rounded-lg" />
                                        <div className="w-full">
                                            <CardContent className="flex flex-col md:flex-row justify-center items-center w-full">
                                                <div className="w-full text-xs md:text-sm font-thin text-gray-800">{ picture[index][1] }</div>
                                                <Cswitch className="flex w-full text-sm justify-end items-center" name="Set as profile picture" />
                                            </CardContent>
                                        </div>
                                    </div>
                                </CardActionArea>
                            </>}
                            </Grid>
                            <Grid xs={2} className="md:w-1/4 hidden md:flex">
                            { index+1 > 0 && index+1 < picture.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <CardMedia component="img" image={ picture[index+1][0] } alt="persona" className="rounded-lg" />
                                    <CardContent className="text-xs md:text-sm font-thin text-gray-800">{ picture[index+1][1] }</CardContent>
                                </CardActionArea>
                            </> }
                            </Grid>
                        </div>
                    </div> }
                </Grid>
                </div>
                <Pagination count={picture.length-1} size="small" onChange={handleChange} className="p-4 md:p-12 self-center text-xs"/>
            </div>
        </div>
    )
}

export default _