import React, { useState, useEffect, ChangeEvent, use } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctextfield from "./Ctextfield";
import { postPicture, getUserPictures, postOtherPicture } from "@/queries/user";
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
  const [names, setNames] = useState([""]);
  const [base64String, setBase64String] = useState([""]);

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

  useEffect(() => {
    getUserPictures({ user_uuid })
      .then(function (response) {
        const npictures = [...pictures];
        npictures.push(response.data);
        setPictures(npictures);
        console.log(response);
        console.log("uuid:::", user_uuid);
        console.log("TITLE", title);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user_uuid]);

  const handleUpload = async () => {
    // if (!file || pictures.length >= 5) {
    //   if (!file) setMessage("Please select a file first.");
    //   else setMessage("You can upload up to 5 pictures.");
    if (setPictures) {
      const npictures = [...pictures];
      npictures.push(file);
      setPictures(npictures);
      const nnames = [...names];
      nnames.push(title);
      setNames(nnames);

      postOtherPicture({
        file,
        title,
        user_uuid,
      })
        .then(function (response) {
          console.log(response);
          console.log("uuid:::", user_uuid);
          console.log("PICS:", pictures);
          console.log("TITLE", title);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log("PIX", npictures);

      setUploading(false);
    }
    if (!file) setMessage("Please select a file first.");
    if (!setPictures) setUploading(true);
    const formData = new FormData();
    if (file) {
      formData.append("file", file); // `file` is guaranteed to be `File` here
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            const nbase64string = [...base64String];
            nbase64string.push(reader.result);
            setBase64String(nbase64string);
          }

          reader.onerror = (error) => {
            console.error("Error converting file to base64: ", error);
          };
        };
        if (setPictures && pictures.length > 4) setUploading(true);
      } else console.error("File is null");
    }
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
        onClick={handleUpload}
        disabled={uploading || title?.length === 0}
      >
        <p className="text-white">{uploading ? "Uploading..." : "Add"}</p>
      </Button>
      {message && <p>{message}</p>}
      {pictures &&
        !!pictures.length &&
        pictures.map((p: any, i: number) => (
          <div key={`pic${i}`}>
            {base64String[i] && (
              <>
                <div className="w-full">{names[i]}</div>
                <img src={base64String[i]} alt={names[i]} />
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default _;
