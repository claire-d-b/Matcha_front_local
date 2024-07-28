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



const conversations = [ {
    'currentUser': 'Victor D.',
    'otherUser': 'Sabine F.',
    'createdAt': new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
    'messages': [
        { 'author': 'Victor D.', 'content': 'greeeaaaat. Thx', 'mine': true, 'date': new Date().toLocaleDateString(), 'time': new Date().toLocaleTimeString(), 'received': true },
        { 'author': 'Luc V.', 'content': 'Fine and you ?', 'mine': false, 'date': new Date().toLocaleDateString(), 'time': new Date().toLocaleTimeString(), 'received': true },
        {'author': 'Victor D.', 'content': 'Wiiiiiill thaaaaaat beeeee visssiibllleee ???', 'mine': true, 'date': new Date().toLocaleDateString(), 'time': new Date().toLocaleTimeString(), 'received': false}
    ]
},
{
    'currentUser': 'Victor D.',
    'otherUser': 'Catherine V.',
    'createdAt': new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
    'messages': []
},
{
    'currentUser': 'Victor D.',
    'otherUser': 'Solène H.',
    'createdAt': new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
    'messages': []
},
{
    'currentUser': 'Victor D.',
    'otherUser': 'Mélissa T.',
    'createdAt': new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
    'messages': []
},
{
    'currentUser': 'Victor D.',
    'otherUser': 'Déborah W.',
    'createdAt': new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
    'messages': []
},
]

const _ = () => {
    console.log(conversations)
    console.log(conversations.length)

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
                { conversations.length && conversations.map((c, i) =>
                    <div key={`conversation_${i}`}>
                        { c.messages.length &&
                            <div className="flex flex-col gap-1 mb-8 md:mb-4 text-sm text-white justify-center items-center bg-gray-600 rounded-lg p-4">
            
                                <div key={`message_${i}`} className="flex flex-col w-full justify-center items-center gap-2">
                                    { c.currentUser === c.messages[c.messages.length - 1].author && 
                                        <div className="self-start">{ c.otherUser }
                                            <div className='py-1 px-2 md:px-4 md:py-2 self-end rounded-lg font-thin text-xs'>You: { c.messages[c.messages.length - 1].content }</div>
                                            </div>
                                        || <div className="self-start">{ c.otherUser }
                                            <div className='py-1 px-2 md:px-4 md:py-2 self-start rounded-lg font-thin text-xs'>{ c.otherUser } { c.messages[c.messages.length - 1].author } { c.messages[c.messages.length - 1].content }</div>
                                        </div>
                                    }
                                </div>
                            </div> } 
                        ||
                        <div className="w-full text-white text-sm bg-gray-600 p-6 rounded-lg">Conversation with {c.currentUser} and { c.otherUser }</div>
                    </div>
                )}
                </div>
            </div>
            <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
                Copyright
            </Paper>
        </div>
    </ThemeProvider>)
}

export default _