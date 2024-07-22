// import Cexample from "./Cexample"
// import Ctitle from "./Ctitle"
// import { TextField } from "@mui/material"

// export default function Home() {
//   return (
//     <div className="w-full">
//       <Cexample opts="p-4 flex flex-col w-full h-full justify-center items-center bg-gray-200">
//         <Ctitle opts="text-lg font-light text-white" title="Matcha" />
//       </Cexample>
//       <div className="p-2 flex flex-col h-full w-full justify-center items-center">
//         <div className="gap-2 flex flex-col">
//           <TextField InputProps={{ sx: { borderRadius: '0.75rem' } }} type="email" size="small" variant="outlined" label="email" />
//           <TextField InputProps={{ sx: { borderRadius: '0.75rem' } }} type="password" size="small" variant="outlined" label="password" />
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
// App.js
import React from 'react';
import { ThemeProvider, Paper } from '@mui/material'
import Ctextfield from './Ctextfield'
import Ctitle from './Ctitle'
import Image from 'next/image';
import TeaImage from './assets/tea.png'
import theme from './theme'


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-screen w-screen">
        <div className="p-4 border h-full border-white flex flex-col w-full justify-center items-center bg-gray-800">
          <Ctitle opts="text-lg font-light text-white" title="Matcha" />
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-1/4 flex-shrink'></div>
          <Paper className="rounded-none w-1/2 p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center">
            <div className="pt-10 gap-2 flex flex-col justify-start items-center">
              <Ctextfield type="email" size="small" variant="outlined" label="email" />
              <Ctextfield type="password" size="small" variant="outlined" label="password" />
              <Image src={TeaImage} alt="matcha" />
            </div>
          </Paper>
          <div className='w-1/4 flex-shrink'></div>
        </div>
        <div className="w-full h-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800 text-white">Copyright</div>
      </div>
    </ThemeProvider>
  );
}