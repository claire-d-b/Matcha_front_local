'use client'

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image'
import PeopleImageF from '../../../public/images/people_f.png'
import PeopleImageM from '../../../public/images/people_m.png'
import { ThemeProvider, Paper, Stack } from '@mui/material'
import theme from '../theme'
import Ctitle from '../Ctitle'
import Cnav from '../Cnav'
import LeafImage from '../../../public/images/leaf.png'
import { Card, CardContent, CardActionArea, CardMedia } from '@mui/material'
import Pagination from '@mui/material/Pagination';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  
const profiles = [[], ['Seb A.', 'm'], ['Marine O.', 'f'], ['Sylvie Y.', 'f'], ['Antoine N.', 'm'], ['Eugénie A.', 'f']]

const _ = () => {
    const [index, setIndex] = useState(1)
    const handleChange= (event: React.ChangeEvent<unknown>, value: number) => {
        setIndex(value)
      }
    
    return (
        <ThemeProvider theme={theme}>
        <div className="flex flex-col h-screen w-screen">
            <Paper className="p-4 border border-white flex w-full justify-center items-center">
                <Ctitle opts="text-lg font-light" title="Matcha" />
                <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
                <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-12 text-xs md:text-base" />
            </Paper>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <>
                <Grid container spacing={4} className="h-full w-full justify-center items-center p-8">
                    <div key={`persona_${index}`} className="flex flex-col">
                        <div className="flex justify-center items-center">
                            <Grid xs={2} className="md:w-1/4 hidden md:flex">
                            { index-1 > 0 && index-1 < profiles.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <CardMedia component="img" image={ profiles[index-1][1] == 'f' ? "../../images/people_f.png" : "../../images/people_m.png" } alt="persona" className="rounded-lg" />
                                    <CardContent className="text-xs md:text-sm font-thin text-gray-800">{ profiles[index-1][0] }</CardContent>
                                </CardActionArea>
                            </> }
                            </Grid>
                            <Grid xs={8} className="w-full md:w-1/2">
                            { index > 0 && index < profiles.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <CardMedia component="img" image={ profiles[index][1] == 'f' ? "../../images/people_f.png" : "../../images/people_m.png" } alt="persona" className="rounded-lg" />
                                    <CardContent className="text-xs md:text-sm font-thin text-gray-800">{ profiles[index][0] }</CardContent>
                                </CardActionArea>
                            </>}
                            </Grid>
                            <Grid xs={2} className="md:w-1/4 hidden md:flex">
                            { index+1 > 0 && index+1 < profiles.length && <>
                                <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                                    <CardMedia component="img" image={ profiles[index+1][1] == 'f' ? "../../images/people_f.png" : "../../images/people_m.png" } alt="persona" className="rounded-lg" />
                                    <CardContent className="text-xs md:text-sm font-thin text-gray-800">{ profiles[index+1][0] }</CardContent>
                                </CardActionArea>
                            </> }
                            </Grid>
                        </div>
                    </div>
                </Grid>
                </>
                <Pagination count={profiles.length-1} size="small" onChange={handleChange} className="p-6 md:p-12 self-center"/>
            </div>
            <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
                Copyright
            </Paper>
        </div>
    </ThemeProvider>)
}

export default _