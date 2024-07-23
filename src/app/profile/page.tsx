import React from 'react'
import { ThemeProvider, Paper } from '@mui/material'
import Ctextfield from '../Ctextfield'
import Cprofile from '../Cprofile'
import Ctitle from '../Ctitle'
import Cnav from '../Cnav'
import Image from 'next/image'
import TeaImage from '../../../public/images/tea.png'
import LeafImage from '../../../public/images/leaf.png'
import theme from '../theme'
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';


const _ = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col h-screen w-screen bg-gray-300">
            <Paper className="p-4 border border-white flex w-full justify-center items-center bg-gray-800">
                <Ctitle opts="text-lg font-light" title="Matcha" />
                <Image className="w-10 h-auto" src={LeafImage} alt="leaf" />
                <Cnav className="self-end flex w-full justify-end items-center gap-12" />
            </Paper>
            <div className="w-full flex items-center justify-center">
                <Cprofile className="p-8 flex flex-col gap-4 w-full bg-transparent"/>
                <div className="w-full p-8 gap-4 flex flex-col justify-center items-center">
                    <Paper className="p-8 rounded-lg flex flex-col gap-4 w-full text-lg font-thin">Location
                        <Stack direction="row" spacing={1}>
                            <Chip label="French" className="font-normal bg-gray-600 text-white" />
                            <Chip label="Paris 15" variant="outlined" className="font-normal"/>
                        </Stack>
                    </Paper>
                    <Paper className="p-8 rounded-lg flex flex-col gap-4 w-full text-lg font-thin text-lg">Hobbies
                        <FormGroup>
                            <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Yoga" />
                            <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Drawing" />
                            <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Travel"/>
                        </FormGroup>
                    </Paper>
                    <Paper className="flex p-8 rounded-lg flex flex-col gap-4 w-full font-thin justify-center items-start">
                        <div className="flex items-start">
                            <div>What I am looking for...</div>
                            <IconButton size="small"><SearchIcon /></IconButton>
                        </div>
                        <Ctextfield opts="w-full" type="text" size="small" variant="outlined" label="" multiline={true} rows={4} />
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