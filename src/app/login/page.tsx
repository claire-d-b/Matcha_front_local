"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctextfield from "../Ctextfield";
import Image from "next/image";
import LeafImage from "../../../public/images/leaf.png";
import theme from "../theme";
import { login } from "@/queries/user";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation"; // for app directory

const API_URL = "http://127.0.0.1:5000";

const _ = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const router = useRouter();

  const handleClick = () => {
    // Perform your action here
    login({ username, password })
      .then(function (response) {
        console.log("RESP", response);
        // Perform any action you need here
        console.log("Button clicked!");

        // Navigate to the profile page
        router.push(`/onboarding/${response.data.user_uuid}`);
        setId(response.data.user_uuid);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-full w-full justify-center items-stretch">
        <Paper className="rounded-none h-full p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center text-lg font-thin">
          <div className="w-full pt-10 gap-2 flex flex-col justify-center items-center">
            <Image className="w-24 h-auto" src={LeafImage} alt="matcha" />
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2">
              <Ctextfield
                opts="w-full md:w-1/4"
                type="text"
                size="small"
                variant="outlined"
                label="Username"
                multiline={false}
                onChange={handleUsernameChange}
              />
              <Ctextfield
                opts="w-full md:w-1/4"
                type="password"
                size="small"
                variant="outlined"
                label="password"
                multiline={false}
                onChange={handlePasswordChange}
              />
            </div>
            <Button
              className="rounded-lg"
              variant="contained"
              onClick={handleClick}
              size="small"
            >
              Login
            </Button>
          </div>
          <div className="text-sm font-thin pt-6">
            Not registered yet ? <a href="/signup/">Create an account</a>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};
export default _;
