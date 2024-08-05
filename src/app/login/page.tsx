'use client'

import React, { useState, FormEvent, ChangeEvent } from 'react'
import { ThemeProvider, Paper, Button } from '@mui/material'
import Ctextfield from '../Ctextfield'
import Image from 'next/image'
import LeafImage from '../../../public/images/leaf.png'
import theme from '../theme'

const API_URL = 'http://127.0.0.1:5000'

const _ = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e: FormEvent) => {
      e.preventDefault()
    //   await auth.login(email, password)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-screen w-screen justify-center items-stretch">
          <Paper className="rounded-none h-full p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center text-lg font-thin">
            <form onSubmit={handleSubmit} className="w-full pt-10 gap-2 flex flex-col justify-center items-center">
              <Image className="w-24 h-auto" src={LeafImage} alt="matcha" />
              <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2">
                <Ctextfield opts="w-full md:w-1/4" type="email" size="small" variant="outlined" label="email" multiline={false} onChange={handleEmailChange}/>
                <Ctextfield opts="w-full md:w-1/4" type="password" size="small" variant="outlined" label="password" multiline={false} onChange={handlePasswordChange}/>
              </div>
              <Button variant="contained" type="submit" className="rounded-lg" size="small">Login</Button>
            </form>
            <div className="text-sm font-thin pt-6">Not registered yet ? <a href='/signup/'>Create an account</a></div>
          </Paper>
        </div>
    </ThemeProvider>
  )
}
export default _