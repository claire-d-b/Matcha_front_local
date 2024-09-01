import React, { useState, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctextfield from "./Ctextfield";
import { postPicture } from "@/queries/user";

interface ComponentProps {
  title: any;
  setTitle: any;
  handleTitle: any;
  user_uuid?: any;
  name: string;
  handleFile?: any;
}

const fourpictures = ["un", "deux", "trois", "quatre"];
const fivepictures = ["un", "deux", "trois", "quatre", "cinq"];

const _: React.FC<ComponentProps> = ({
  title,
  setTitle,
  user_uuid,
  name,
  handleFile,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
    }
    if (handleFile && e.target.files && e.target.files.length)
      handleFile(e.target.files[0]);
  };

  const handleUpload = async (pictures: string[]) => {
    if (!file || pictures.length >= 5) {
      if (!file) setMessage("Please select a file first.");
      else setMessage("You can upload up to 5 pictures.");

      setUploading(true);
      const formData = new FormData();
      if (file)
        formData.append("file", file); // `file` is guaranteed to be `File` here
      else console.error("File is null");
    }
  };
  return (
    <div className="w-full gap-4 flex flex-col md:flex-row md:flex-wrap justify-start items-center">
      <Button variant="contained" component="label">
        {name}
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      <Ctextfield
        opts=""
        type="text"
        size="small"
        variant="outlined"
        label="Title"
        multiline={false}
        onChange={handleTitle}
        disabled={false}
        required={true}
      />
      {file && <p>{file.name}</p>}
      <Button
        variant="contained"
        color="primary"
        onClick={(_) => handleUpload(fourpictures)}
        disabled={uploading || title?.length === 0}
      >
        <p className="text-white">{uploading ? "Uploading..." : "Add"}</p>
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default _;
