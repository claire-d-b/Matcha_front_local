import React from 'react'
import { ThemeProvider, Paper } from '@mui/material'
import Ctextfield from '../Ctextfield'
import Ctitle from '../Ctitle'
import Cnav from '../Cnav'
import Image from 'next/image'
import TeaImage from '../../../public/images/tea.png'
import LeafImage from '../../../public/images/leaf.png'
import theme from '../theme'


const _ = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-screen w-screen justify-center items-stretch">
          <Paper className="rounded-none h-full p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center text-lg font-thin">
            <div className="w-full pt-10 gap-2 flex flex-col justify-center items-center">
              <Image className="w-24 h-auto" src={LeafImage} alt="matcha" />
              <Ctextfield opts="w-5/6 md:w-1/2" type="email" size="small" variant="outlined" label="email" multiline={false} />
              <Ctextfield opts="w-5/6 md:w-1/2" type="password" size="small" variant="outlined" label="password" multiline={false} />
            </div>
            <div className="text-sm font-thin pt-6">Not registered yet ? <a href='#'>Create an account</a></div>
          </Paper>
        </div>
    </ThemeProvider>
  );
}
export default _