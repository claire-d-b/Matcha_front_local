import React from 'react';
import Alert from '@mui/material/Alert';
import theme from '../../theme'
import { ThemeProvider, Paper, Button } from '@mui/material'

const _ = () => {
    return (
        <ThemeProvider theme={theme}>
            <Paper className="flex flex-col h-screen w-screen justify-center items-center gap-8">
                <div className="text-lg font-thin">You asked for a password reset</div>
                <Alert className="rounded-lg text-gray-800 m-4" severity="info">Please check your emails to reset your password.</Alert>
            </Paper>
        </ThemeProvider>
    )
}

export default _