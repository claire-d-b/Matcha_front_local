"use client";

import { Button, Paper, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import LeafImage from "../../../public/images/leaf.png";
import Ctextfield from "../Ctextfield";
import theme from "../theme";

const _ = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // login(username, password);
    console.log("username:", username);
    console.log("password:", password);
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
          <form
            onSubmit={handleSubmit}
            className="w-full pt-10 gap-2 flex flex-col justify-center items-center"
          >
            <Image className="w-24 h-auto" src={LeafImage} alt="matcha" />
            <Ctextfield
              opts="w-5/6 md:w-1/4"
              type="email"
              size="small"
              variant="outlined"
              label="email"
              multiline={false}
              onChange={handleUsernameChange}
            />
            <Ctextfield
              opts="w-5/6 md:w-1/4"
              type="password"
              size="small"
              variant="outlined"
              label="password"
              multiline={false}
              onChange={handlePasswordChange}
            />
            <Button
              variant="contained"
              type="submit"
              className="rounded-lg"
              size="small"
            >
              Login
            </Button>
          </form>
          <div className="text-sm font-thin pt-6">
            Not registered yet ? <a href="#">Create an account</a>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};
export default _;
