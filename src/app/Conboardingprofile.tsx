"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctitle from "./Ctitle";
import Cnav from "./Cnav";
import Cupload from "./Cupload";
import Image from "next/image";
import LeafImage from "../../public/images/leaf.png";
import theme from "./theme";
import Cstepper from "./Cstepper";
import Cprofile from "./Cprofile";
import Ctextfield from "./Ctextfield";
import Cselect from "./Cselect";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { patchProfile } from "@/queries/user";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation"; // for app directory

const lst = ["M", "F", "-"];

interface ComponentProps {
  required?: any;
  isValid: any;
  setIsValid: any;
  file: any;
  setFile: any;
  profileFirstName: any;
  setProfileFirstName: any;
  profileLastName: any;
  setProfileLastName: any;
  profileBio: any;
  setProfileBio: any;
  gender: any;
  setGender: any;
  title: any;
  setTitle: any;
  pictures?: any;
  setPictures?: any;
}

const _: React.FC<ComponentProps> = ({
  required,
  isValid,
  setIsValid,
  file,
  setFile,
  profileFirstName,
  setProfileFirstName,
  profileLastName,
  setProfileLastName,
  profileBio,
  setProfileBio,
  gender,
  setGender,
  title,
  setTitle,
  pictures,
  setPictures,
}) => {
  const params = useParams();
  const { id } = params; // Access the `id` route parameter
  console.log(id);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (file) {
      setIsValid(true);
    } else setIsValid(false);
  }, [file]);

  return (
    <div className="h-full w-full rounded-lg p-8">
      <div className="flex flex-col gap-8 h-full">
        <div className="w-full h-full flex flex-col items-center justify-start bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col w-full justify-center items-center p-6">
            <div className="text-sm font-thin self-start mb-4">
              Choose your profile picture. It will be public.
            </div>
            <div className="h-full self-start overflow-scroll pt-6">
              <Cupload
                title={title}
                setTitle={setTitle}
                user_uuid={id}
                nname="Upload picture"
                handleFile={setFile}
                handleTitle={handleTitle}
              />
            </div>
          </div>
          <Cprofile
            className="w-full shadow-none"
            edit={true}
            setIsValid={setIsValid}
            profileFirstName={profileFirstName}
            profileLastName={profileLastName}
            profileBio={profileBio}
            setProfileFirstName={setProfileFirstName}
            setProfileLastName={setProfileLastName}
            setProfileBio={setProfileBio}
            gender={gender}
            setGender={setGender}
          />
        </div>
      </div>
    </div>
  );
};

export default _;
