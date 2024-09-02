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
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "next/navigation";
import Alert from "@mui/material/Alert";
import { getUserPictures } from "@/queries/user";

const lst = ["M", "F", "-"];

interface ComponentProps {
  title: any;
  setTitle: any;
  pictures: any;
  setPictures: any;
  required?: any;
  isValid: any;
  setIsValid: any;
}

const _: React.FC<ComponentProps> = ({
  required,
  title,
  setTitle,
  pictures,
  setPictures,
  isValid,
  setIsValid,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const params = useParams();
  const { id } = params; // Access the `id` route parameter
  console.log(id);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="h-full w-full rounded-lg p-8">
      <div className="flex flex-col gap-8 h-full">
        <div className="h-full w-full flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6">
          <div className="text-sm font-thin mb-4">
            Add up to 5 pictures. They will be visible by other users.
          </div>
          <div className="h-full self-start overflow-scroll pt-6">
            <Cupload
              title={title}
              setTitle={setTitle}
              user_uuid={id}
              nname="Upload picture"
              pictures={pictures}
              setPictures={setPictures}
              handleTitle={handleTitle}
            />
          </div>
        </div>
        {pictures && pictures.length >= 4 && (
          <Alert className="rounded-lg text-gray-800 mx-48" severity="error">
            You cannot upload more than 5 pictures.
          </Alert>
        )}
      </div>
    </div>
  );
};

export default _;
