import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image'
import PeopleImageF from '../../../public/images/people_f.png'
import PeopleImageM from '../../../public/images/people_m.png'
import { ThemeProvider, Paper } from '@mui/material'
import theme from '../theme'
import Ctitle from '../Ctitle'
import Cnav from '../Cnav'
import LeafImage from '../../../public/images/leaf.png'
import { Card, CardContent, CardActionArea, CardMedia } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  
const _ = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col h-screen w-screen bg-gray-300">
                <Paper className="p-4 border border-white flex w-full justify-center items-center bg-gray-800">
                    <Ctitle opts="text-lg font-light" title="Matcha" />
                    <Image className="w-10 h-auto" src={LeafImage} alt="leaf" />
                    <Cnav className="self-end flex w-full justify-end items-center gap-12" />
                </Paper>
                <Grid container spacing={4} className="flex h-full w-full justify-center items-center p-8">
                    <Grid xs={2}>
                        <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                            <CardMedia component="img" image="../../images/people_f.png" alt="persona" className="rounded-lg" />
                            <CardContent className="font-thin text-gray-800">People back</CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid xs={6}>
                        <CardActionArea className="m-0 p-4 border rounded-lg shadow-lg">
                            <CardMedia component="img" image="../../images/people_m.png" alt="persona" className="rounded-lg" />
                            <CardContent className="font-thin text-gray-800">People current</CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid xs={2}>
                        <CardActionArea className="m-0 p-4 rborder rounded-lg shadow-lg">
                            <CardMedia component="img" image="../../images/people_f.png" alt="persona" className="rounded-lg" />
                            <CardContent className="font-thin text-gray-800">People next</CardContent>
                        </CardActionArea>
                    </Grid>
                    </Grid>
                <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
                    Copyright
                </Paper>
            </div>
      </ThemeProvider>
    )
}

export default _