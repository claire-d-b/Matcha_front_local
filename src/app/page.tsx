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

// App.js
import React from 'react';
import { CssBaseline } from '@mui/material'
import Ctextfield from './Ctextfield'
import Ctitle from './Ctitle'
import Image from 'next/image';
import TeaImage from './assets/tea.png'


export default function Home() {
  return (
    <div>
      <CssBaseline />
        <div className="w-full">
        <div className="p-4 flex flex-col w-full h-full justify-center items-center bg-gray-200">
          <Ctitle opts="text-lg font-light text-white" title="Matcha" />
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-1/4 flex-shrink'></div>
          <div className="w-1/2 p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center bg-gray-800">
            <div className="gap-2 flex flex-col">
              <Ctextfield type="email" size="small" variant="outlined" label="email" />
              <Ctextfield type="password" size="small" variant="outlined" label="password" />
              <Image src={TeaImage} alt="matcha" />
            </div>
          </div>
          <div className='w-1/4 flex-shrink'></div>
        </div>
      </div>
    </div>
  );
}


