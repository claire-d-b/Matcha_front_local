"use client";

import { Button, Paper, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import LeafImage from "../../../../public/images/leaf.png";
import Ctextfield from "../../Ctextfield";
import theme from "../../theme";

const API_URL = "http://127.0.0.1:5000";

const _ = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [npassword, setNpassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password == npassword) console.log("passwords match");
    //   await auth.login(email, password)
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNpasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNpassword(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-full w-full justify-center items-stretch">
        <Paper className="rounded-none h-full p-2 flex flex-col flex-grow flex-shrink-0 justify-center items-center text-lg font-thin">
          <form
            onSubmit={handleSubmit}
            className="w-full pt-10 gap-2 flex flex-col justify-center items-center"
          >
            <Image className="w-24 h-auto" src={LeafImage} alt="matcha" />
            <div className="w-full flex flex-col justify-center items-center gap-2">
              {/* <Ctextfield opts="w-full md:w-1/4" type="email" size="small" variant="outlined" label="Username" multiline={false} onChange={handleUsernameChange}/> */}
              <Ctextfield
                opts="w-full md:w-1/4"
                type="password"
                size="small"
                variant="outlined"
                label="password"
                multiline={false}
                onChange={handlePasswordChange}
              />
              <Ctextfield
                opts="w-full md:w-1/4"
                type="password"
                size="small"
                variant="outlined"
                label="Confirm password"
                multiline={false}
                onChange={handleNpasswordChange}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              className="rounded-lg"
              size="small"
            >
              Save
            </Button>
          </form>
        </Paper>
      </div>
    </ThemeProvider>
  );
};
export default _;
