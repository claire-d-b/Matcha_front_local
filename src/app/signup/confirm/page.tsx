import React from 'react';
import Alert from '@mui/material/Alert';
import theme from '../../theme'
import { ThemeProvider, Paper } from '@mui/material'

const _ = () => {
    return (
        <ThemeProvider theme={theme}>
            <Paper className="flex flex-col h-screen w-screen justify-center items-center gap-8">
                <div className="text-2xl font-thin">Almost done !</div>
                <Alert className="rounded-lg text-gray-800 m-4" severity="success">You have been successfully registered. Please check your emails to confirm you address.</Alert>
            </Paper>
        </ThemeProvider>
    )
}

export default _