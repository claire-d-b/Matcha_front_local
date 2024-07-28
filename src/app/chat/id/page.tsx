import React from 'react'
import { ThemeProvider, Paper, IconButton } from '@mui/material'
import Ctextfield from '../../Ctextfield'
import Ctitle from '../../Ctitle'
import Cnav from '../../Cnav'
import Image from 'next/image'
import TeaImage from '../../../public/images/tea.png'
import LeafImage from '../../../public/images/leaf.png'
import theme from '../../theme'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const messages = [ {
    'author': 'Victor D.',
    'content': 'How are you ?',
    'mine': true,
    'date': new Date().toLocaleDateString(),
    'time': new Date().toLocaleTimeString(),
    'received': true
},
{
    'author': 'Luc V.',
    'content': 'Fine and you ?',
    'mine': false,
    'date': new Date().toLocaleDateString(),
    'time': new Date().toLocaleTimeString(),
    'received': true
},
{
    'author': 'Victor D.',
    'content': 'greeeaaaat. Thx',
    'mine': true,
    'date': new Date().toLocaleDateString(),
    'time': new Date().toLocaleTimeString(),
    'received': true
},
{
    'author': 'Victor D.',
    'content': 'Wiiiiiill thaaaaaat beeeee visssiibllleee ???',
    'mine': true,
    'date': new Date().toLocaleDateString(),
    'time': new Date().toLocaleTimeString(),
    'received': false
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
            <div className="rounded-lg p-12 flex flex-col justify-center items-center text-lg font-thin bg-gray-400">
                <div className="md:w-1/2 self-center bg-white rounded-lg p-12 shadow-lg overflow-scroll">
                { messages.length && messages.map((m, i) =>
                    <div key={`message_${i}`} className="flex flex-col gap-1 mb-8 md:mb-4 text-sm text-white justify-center items-center">
                        <div className={ m.mine ? 'mb-2 md:mb-4 text-gray-800 self-end' : 'mb-2 md:mb-4 text-gray-800 self-start' }>Sent on { m.date } at { m.time }</div>
                        <Paper sx={{ backgroundColor: m.mine ? '#629c8d' : '#1f2937' }} className={ m.mine ? 'py-1 px-2 md:px-4 md:py-2 self-end rounded-lg font-semibold text-white' : 'py-1 px-2 md:px-4 md:py-2 self-start rounded-lg font-semibold text-white'}>{ m.mine ? 'You' : m.author }</Paper>
                        <div className={ m.mine ? 'py-1 px-2 md:px-4 md:py-2 self-end bg-gray-400 rounded-lg font-thin' : 'py-1 px-2 md:px-4 md:py-2 self-start bg-gray-400 rounded-lg font-thin'}>{ m.content }</div>
                        { m.received &&
                        <IconButton size="small" className={ m.mine ? "mt-0 self-end bg-transparent" : 'mt-0 self-start bg-transparent' } disabled><CheckCircleIcon className={ m.mine ? "text-sm" : "text-sm text-gray-800" }/></IconButton>
                        || <IconButton size="small" className={ m.mine ? "mt-0 self-end bg-transparent" : 'mt-0 self-start bg-transparent' } disabled><CheckCircleOutlineIcon className={ m.mine ? "text-sm" : "text-sm text-gray-800" } /></IconButton> }
                    </div>) }
                </div>
            </div>
            <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
                Copyright
            </Paper>
        </div>
    </ThemeProvider>)
}
export default _