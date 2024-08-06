'use client'

import React, { useState, FormEvent, ChangeEvent } from 'react'
import { ThemeProvider, Paper, Button } from '@mui/material'
import Ctextfield from '../Ctextfield'
import Image from 'next/image'
import LeafImage from '../../../public/images/leaf.png'
import theme from '../theme'
import useAuth from '../services/useAuth'

const API_URL = 'http://127.0.0.1:5000'


const _ = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [npassword, setNpassword] = useState('')
  const [user, setUser] = useState({})
  const auth = useAuth();

  const handleSubmit = async(e: FormEvent) => {
      e.preventDefault()
      if (password == npassword)
        console.log("passwords match")
    //   await auth.login(email, password)
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-screen w-screen justify-center items-stretch">
          <Paper className="rounded-none h-full p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center text-lg font-thin">
            <form onSubmit={handleSubmit} className="w-full pt-10 gap-2 flex flex-col justify-center items-center">
              <Image className="w-24 h-auto" src={LeafImage} alt="matcha" />
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="w-full md:w-1/4 text-base font-medium">Username</div>
                {/* <Ctextfield opts="w-full md:w-1/4 mb-4" type="email" size="small" variant="outlined" label="Email" multiline={false} onChange={handleEmailChange}/> */}
                <div className="text-base w-full md:w-1/4">We will send an email to this address whith a link to reset your password.</div>
              </div>
              <Button variant="contained" type="submit" className="rounded-lg" size="small">Send</Button>
            </form>
          </Paper>
        </div>
    </ThemeProvider>
  )
}
export default _