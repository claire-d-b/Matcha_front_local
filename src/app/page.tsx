'use client';

import React from 'react'
import { ThemeProvider, Paper } from '@mui/material'
import Ctextfield from './Ctextfield'
import Ctitle from './Ctitle'
import Cnav from './Cnav'
import Image from 'next/image'
import TeaImage from './assets/tea.png'
import LeafImage from './assets/leaf.png'
import theme from './theme'


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-screen w-screen bg-gray-300">
        <Paper className="p-4 border border-white flex w-full justify-center items-center bg-gray-800">
          <Ctitle opts="text-lg font-light" title="Matcha" />
          <Image className="w-10 h-auto" src={LeafImage} alt="leaf" />
          <Cnav className="self-end flex w-full justify-end items-center gap-12" />
        </Paper>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-1/4 flex-shrink'></div>
          <Paper className="rounded-none h-full w-1/2 p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center">
            <div className="pt-10 gap-2 flex flex-col justify-start items-center">
              <Ctextfield opts="" type="email" size="small" variant="outlined" label="email" />
              <Ctextfield opts="" type="password" size="small" variant="outlined" label="password" />
              <Image className="w-48 h-auto" src={TeaImage} alt="matcha" />
            </div>
            <div className="text-sm font-thin">Not registered yet ? <a href='#'>Create an account</a></div>
          </Paper>
          <div className='w-1/4 flex-shrink'></div>
        </div>
        <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
          Copyright
        </Paper>
      </div>
    </ThemeProvider>
  );
}