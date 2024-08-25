"use client";

import { Button, Paper, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import LeafImage from "../../../public/images/leaf.png";
import Ctextfield from "../Ctextfield";
import theme from "../theme";
import { createUser } from "@/queries/user";
import Link from "next/link";
import { useRouter } from "next/navigation"; // for app directory

const _ = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const router = useRouter();

  const handleClick = () => {
    // Perform your action here
    createUser({ username, password, email, firstName, lastName })
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

  // const handleSubmit = (e: FormEvent) => {
  //   // pas besoin de async avec axios
  //   console.log("ICI");
  //   e.preventDefault();
  //   createUser({ username, password, email, firstName, lastName })
  //     .then(function (response) {
  //       console.log("RESP", response);
  //       // setId(response.user_uuid);
  //     })
  //     .catch(function (error) {
  //       console.log("EERROR:", error);
  //     });
  //   // await auth.signup(firstName, lastName, email, password);
  // };

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
            <div className="w-full flex flex-col md:flex-row gap-2 justify-center items-center mb-2">
              <Ctextfield
                opts="w-full md:w-1/4"
                type="text"
                size="small"
                variant="outlined"
                label="First name"
                multiline={false}
                onChange={handleFirstNameChange}
              />
              <Ctextfield
                opts="w-full md:w-1/4"
                type="text"
                size="small"
                variant="outlined"
                label="Last name"
                multiline={false}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="text-sm flex flex-col md:flex-row w-full justify-center items-center gap-2 mb-2">
              <div className="w-full md:w-1/4 p-2">
                Choose a username that will be public
              </div>
              <Ctextfield
                opts="w-full md:w-1/4"
                type="text"
                size="small"
                variant="outlined"
                label="Username"
                multiline={false}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2">
              <Ctextfield
                opts="w-full md:w-1/4"
                type="email"
                size="small"
                variant="outlined"
                label="email"
                multiline={false}
                onChange={handleEmailChange}
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
              variant="contained"
              onClick={handleClick}
              className="rounded-lg"
              size="small"
            >
              Login
            </Button>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};
export default _;
