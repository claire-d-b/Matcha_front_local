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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const auth = useAuth();

  const handleSubmit = async(e: FormEvent) => {
      e.preventDefault()
      await auth.signup(firstName, lastName, email, password)
  }

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-full w-full justify-center items-stretch">
          <Paper className="rounded-none h-full p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center text-lg font-thin">
            <form onSubmit={handleSubmit} className="w-full pt-10 gap-2 flex flex-col justify-center items-center">
              <Image className="w-24 h-auto" src={LeafImage} alt="matcha" />
              <div className="w-full flex flex-col md:flex-row gap-2 justify-center items-center mb-2">
                <Ctextfield opts="w-full md:w-1/4" type="text" size="small" variant="outlined" label="First name" multiline={false} onChange={handleFirstNameChange}/>
                <Ctextfield opts="w-full md:w-1/4" type="text" size="small" variant="outlined" label="Last name" multiline={false} onChange={handleLastNameChange}/>
              </div>
              <div className="text-sm flex flex-col md:flex-row w-full justify-center items-center gap-2 mb-2">
              <div className="w-full md:w-1/4 p-2">Choose a username that will be public</div>
                <Ctextfield opts="w-full md:w-1/4" type="text" size="small" variant="outlined" label="Username" multiline={false} onChange={handleUsernameChange}/>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2">
                <Ctextfield opts="w-full md:w-1/4" type="email" size="small" variant="outlined" label="email" multiline={false} onChange={handleEmailChange}/>
                <Ctextfield opts="w-full md:w-1/4" type="password" size="small" variant="outlined" label="password" multiline={false} onChange={handlePasswordChange}/>
              </div>
              <Button variant="contained" type="submit" className="rounded-lg" size="small">Login</Button>
            </form>
          </Paper>
        </div>
    </ThemeProvider>
  )
}
export default _