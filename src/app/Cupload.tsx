import React, { useState, ChangeEvent } from 'react';
import { ThemeProvider, Paper, Button } from '@mui/material'
import Ctextfield from './Ctextfield'

interface ComponentProps {
  name: string
}

const fourpictures = ['un', 'deux', 'trois', 'quatre']
const fivepictures = ['un', 'deux', 'trois', 'quatre', 'cinq']

const _: React.FC<ComponentProps> = ({ name }) => {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('')

    const handleTitle= (event: React.ChangeEvent<unknown>, value: string) => {
      setTitle(value)
    }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (pictures: string[]) => {
    if (!file || pictures.length >= 5) {
      if (!file)
        setMessage('Please select a file first.')
      else
        setMessage('You can upload up to 5 pictures.')

      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://127.0.0.1:5000/picture', {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include cookies in the request
        });
        return response.json();
    }
    catch (error) {
        setMessage('Failed to upload picture.');
      } finally {
        setUploading(false);
      }
    }
    return (
      <div className="w-full gap-4 flex flex-col md:flex-row justify-center items-center">
        <Button variant="contained" component="label">
          { name }
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Ctextfield opts="" type="text" size="small" variant="outlined" label="Title" value={title} multiline={false} onChange={handleTitle} disabled={false} />
        {file && <p>{ file.name }</p>}
        <Button variant="contained" color="primary" onClick={_ => handleUpload(fourpictures)} disabled={uploading || title?.length === 0}>
          <p className="text-white">{uploading ? 'Uploading...' : 'Add'}</p>
        </Button>
        {message && <p>{message}</p>}
      </div>
  );
};

export default _
