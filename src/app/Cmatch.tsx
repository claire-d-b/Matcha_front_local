'use client'

import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider, Paper, Stack } from '@mui/material'
import theme from './theme'
import Cupload from './Cupload'
import { CardContent, CardActionArea, CardMedia } from '@mui/material'
import Pagination from '@mui/material/Pagination';

const comment = ['At the sea', 'Home', 'Birthday snapshot', 'New tee-shirt', '<3<3']

interface ComponentProps {
    className?: string
  }

const _: React.FC<ComponentProps> = ({ className }) => {
    const [index, setIndex] = useState(1)
    const [title, setTitle] = useState('')
    const handleChange= (event: React.ChangeEvent<unknown>, value: number) => {
        setIndex(value)
      }
      const handleTitle= (event: React.ChangeEvent<unknown>, value: string) => {
        setTitle(value)
      }
    
    return (
        <ThemeProvider theme={theme}>
        <div className={className ?? "" + " flex flex-col h-screen w-screen"}>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <>
                <Grid container spacing={4} className="flex flex-col h-full w-full justify-center items-center p-8 gap-2" >
                    <Cupload name="Upload file"/>
                    <div key={`persona_${index}`} className="flex flex-col">
                        <div className="flex justify-center items-center">
                            <Grid xs={2} className="md:w-1/4 hidden md:flex">
                            { index-1 > 0 && index-1 < comment.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <CardMedia component="img" image={ "../../images/people_m.png" } alt="persona" className="rounded-lg" />
                                    <CardContent className="text-xs md:text-sm font-thin text-gray-800">{ comment[index-1] }</CardContent>
                                </CardActionArea>
                            </> }
                            </Grid>
                            <Grid xs={8} className="w-full md:w-1/2">
                            { index > 0 && index < comment.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <CardMedia component="img" image={ "../../images/people_f.png" } alt="persona" className="rounded-lg" />
                                    <CardContent className="text-xs md:text-sm font-thin text-gray-800">{ comment[index] }</CardContent>
                                </CardActionArea>
                            </>}
                            </Grid>
                            <Grid xs={2} className="md:w-1/4 hidden md:flex">
                            { index+1 > 0 && index+1 < comment.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <CardMedia component="img" image={ "../../images/people_m.png" } alt="persona" className="rounded-lg" />
                                    <CardContent className="text-xs md:text-sm font-thin text-gray-800">{ comment[index+1] }</CardContent>
                                </CardActionArea>
                            </> }
                            </Grid>
                        </div>
                    </div>
                </Grid>
                </>
                <Pagination count={comment.length-1} size="small" onChange={handleChange} className="p-6 md:p-12 self-center"/>
            </div>
        </div>
    </ThemeProvider>)
}

export default _