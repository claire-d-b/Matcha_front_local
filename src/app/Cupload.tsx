import React, { useState, useEffect, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctextfield from "./Ctextfield";
import { postPicture, getUserPictures } from "@/queries/user";
import { useParams } from "next/navigation";

interface ComponentProps {
  title: any;
  setTitle: any;
  handleTitle: any;
  pictures?: any;
  setPictures?: any;
  user_uuid: any;
  nname: string;
  handleFile?: any;
}

const fourpictures = ["un", "deux", "trois", "quatre"];
const fivepictures = ["un", "deux", "trois", "quatre", "cinq"];

const _: React.FC<ComponentProps> = ({
  title,
  setTitle,
  pictures,
  setPictures,
  user_uuid,
  nname,
  handleFile,
}) => {
  const params = useParams();
  const { id } = params; // Access the `id` route parameter
  console.log(id);
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

  const handleUpload = async () => {
    // if (!file || pictures.length >= 5) {
    //   if (!file) setMessage("Please select a file first.");
    //   else setMessage("You can upload up to 5 pictures.");
    if (setPictures) {
      setPictures([...pictures, file]);
      getUserPictures({ user_uuid })
        .then(function (response) {
          setPictures([...pictures, response]);
          console.log(response);
          console.log("uuid:::", user_uuid);
          console.log("TITLE", title);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (!file) setMessage("Please select a file first.");
    setUploading(true);
    const formData = new FormData();
    if (file)
      formData.append("file", file); // `file` is guaranteed to be `File` here
    else console.error("File is null");
  };
  return (
    <div className="w-full gap-4 flex flex-col md:flex-row md:flex-wrap justify-start items-center">
      <Button variant="contained" component="label">
        {nname}
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
        onClick={(_) => handleUpload()}
        disabled={uploading || title?.length === 0}
      >
        <p className="text-white">{uploading ? "Uploading..." : "Add"}</p>
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default _;
