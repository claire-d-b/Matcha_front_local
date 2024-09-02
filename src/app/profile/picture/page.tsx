"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctitle from "../../Ctitle";
import Cnav from "../../Cnav";
import Cmatch from "../../Cmatch";
import Image from "next/image";
import LeafImage from "../../../../public/images/leaf.png";
import theme from "../../theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

const API_URL = "http://127.0.0.1:5000";

const _ = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Paper className="p-4 border border-white flex w-full justify-center items-center">
        <Ctitle opts="text-lg font-light" title="Matcha" />
        <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
        <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-4 text-xs md:text-base" />
      </Paper>
      <div className="flex flex-col h-full w-full justify-center items-stretch">
        <Paper className="p-8 rounded-none w-full h-full p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center text-lg font-thin">
          <a
            href="/profile/f/"
            className="p-8 flex w-full font-thin text-md justify-center items-center gap-4"
          >
            <IconButton className="bg-gray-800">
              <ArrowBackIcon />
            </IconButton>
            Back to profile
          </a>
          <Cmatch className="w-full" upload={false} />
        </Paper>
      </div>
      <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
        Copyright
      </Paper>
    </ThemeProvider>
  );
};
export default _;
