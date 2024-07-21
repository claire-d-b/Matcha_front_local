import Cexample from "./Cexample"
import Ctitle from "./Ctitle"
import { TextField } from "@mui/material"

export default function Home() {
  return (
    <div className="w-full">
      <Cexample opts="p-4 flex flex-col w-full h-full justify-center items-center bg-gray-200">
        <Ctitle opts="text-lg font-light text-white" title="Matcha" />
      </Cexample>
      <div className="p-2 flex flex-col h-full w-full justify-center items-center">
        <div className="gap-2 flex flex-col">
          <TextField InputProps={{ sx: { borderRadius: '0.75rem' } }} type="email" size="small" variant="outlined" label="email" />
          <TextField InputProps={{ sx: { borderRadius: '0.75rem' } }} type="password" size="small" variant="outlined" label="password" />
        </div>
      </div>
    </div>
  );
}
