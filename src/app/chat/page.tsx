'use client'

import React from 'react'
import { ThemeProvider, Paper, IconButton } from '@mui/material'
import Ctextfield from '../Ctextfield'
import Ctitle from '../Ctitle'
import Cnav from '../Cnav'
import Image from 'next/image'
import TeaImage from '../../../public/images/tea.png'
import LeafImage from '../../../public/images/leaf.png'
import theme from '../theme'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from '@mui/material/Avatar';
import CProtectedRoute from '../CprotectedRoute'



const conversations = [ {
    'currentUser': 'Victor D.',
    'otherUser': 'Sabine F.',
    'createdAt': new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    'messages': [
        { 'author': 'Victor D.', 'content': 'greeeaaaat. Thx', 'mine': true, 'date': new Date().toLocaleDateString(), 'time': new Date().toLocaleTimeString(), 'received': true },
        { 'author': 'Luc V.', 'content': 'Fine and you ?', 'mine': false, 'date': new Date().toLocaleDateString(), 'time': new Date().toLocaleTimeString(), 'received': true },
        {'author': 'Victor D.', 'content': 'Wiiiiiill thaaaaaat beeeee visssiibllleee ???', 'mine': true, 'date': new Date().toLocaleDateString(), 'time': new Date().toLocaleTimeString(), 'received': false}
    ]
},
{
    'currentUser': 'Victor D.',
    'otherUser': 'Catherine V.',
    'createdAt': new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    'messages': [
        { 'author': 'Catherine V.', 'content': 'greeeaaaat. Thx', 'mine': false, 'date': new Date().toLocaleDateString(), 'time': new Date().toLocaleTimeString(), 'received': true },
    ]
},
{
    'currentUser': 'Victor D.',
    'otherUser': 'Solène H.',
    'createdAt': new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    'messages': []
},
{
    'currentUser': 'Victor D.',
    'otherUser': 'Mélissa T.',
    'createdAt': new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    'messages': []
},
{
    'currentUser': 'Victor D.',
    'otherUser': 'Déborah W.',
    'createdAt': new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    'messages': []
},
]

const _ = () => {

  return (
    <ThemeProvider theme={theme}>
        <div className="flex flex-col h-screen w-screen bg-gray-300">
            <Paper className="p-4 border border-white flex w-full justify-center items-center">
                <Ctitle opts="text-lg font-light" title="Matcha" />
                <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
                <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-12 text-xs md:text-base" />
            </Paper>
            <div className="h-full rounded-lg p-12 flex flex-col justify-center items-center text-lg font-thin bg-gray-400">
                <div className="md:w-1/2 self-center bg-white rounded-lg p-12 shadow-lg overflow-scroll">
                { conversations.length && conversations.map((c, i) =>
                    <div key={`conversation_${i}`}>
                        { c.messages.length &&
                            <div className="flex gap-1 mb-8 md:mb-4 text-sm justify-center items-center bg-gray-800 rounded-lg p-4">
            
                                <div key={`message_${i}`} className="flex w-full justify-center items-center gap-2">
                                    { c.currentUser === c.messages[c.messages.length - 1].author && 
                                        <div className="w-full flex gap-4 justify-between items-center">
                                            <Avatar className="text-xs md:text-xl md:pt-1">{ c.otherUser[0].toUpperCase() }</Avatar>
                                            <Paper sx={{ backgroundColor: '#629c8d' }} className="py-1 px-2 md:px-4 md:py-2 rounded-lg text-xs text-white font-normal bg-opacity-50">You : { c.messages[c.messages.length - 1].content }</Paper>
                                        </div>
                                        || <div className="w-full flex justify-start items-center gap-4">
                                            <Avatar className=" text-xs md:text-xl md:pt-1">{ c.otherUser[0].toUpperCase() }</Avatar>
                                            <Paper className='py-1 px-2 md:px-4 md:py-2 rounded-lg text-xs text-white font-normal bg-gray-400 bg-opacity-50'>{ c.otherUser } : { c.messages[c.messages.length - 1].content }</Paper>
                                        </div>
                                    }
                                </div>
                            </div>
                        ||
                        <div className="flex gap-1 mb-8 md:mb-4 text-sm justify-center items-center bg-gray-800 rounded-lg p-4">
                            <div className="flex w-full justify-start items-center">
                                <Avatar className="flex self-start justify-center items-center text-xs md:text-xl md:pt-1">{ c.otherUser[0].toUpperCase() }</Avatar>
                                <div className="py-1 px-2 md:px-4 md:py-2 text-xs text-white font-thin">Conversation created on { c.createdAt }.</div>
                            </div>
                        </div> }
                    </div>
                )}
                </div>
            </div>
            <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
                Copyright
            </Paper>
        </div>
    </ThemeProvider>
  )
}

export default CProtectedRoute(_);
