"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctitle from "../../../Ctitle";
import Cnav from "../../../Cnav";
import Image from "next/image";
import LeafImage from "../../../../../public/images/leaf.png";
import theme from "../../../theme";
import CprofileEdit from "../../../CprofileEdit";
import Ctextfield from "../../../Ctextfield";
import Cselect from "../../../Cselect";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { getProfile } from "@/queries/user";
import { patchProfile } from "@/queries/user";
import { useParams } from "next/navigation";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const lst = ["M", "F", "-"];

const _ = ({ fullPage = true }) => {
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState([""]);
  const [hobby, setHobby] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const [profileFirstName, setProfileFirstName] = useState("");
  const [profileLastName, setProfileLastName] = useState("");
  const [profileBio, setProfileBio] = useState("");
  const [points, setPoints] = useState(0.0);
  const [alert, setAlert] = useState(false);

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handlePreference = (event: SelectChangeEvent) => {
    setPreference(event.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleHobby = (e: ChangeEvent<HTMLInputElement>) => {
    setHobby(e.target.value);
  };

  const addHobbies = () => {
    if (hobby.length) {
      const nhobbies = [...hobbies];
      nhobbies.push(hobby);
      setHobbies(nhobbies);
    }
  };

  const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
    const nhobbies = [...hobbies];
    nhobbies.splice(hobbies.indexOf(e.target.value), 1);
    setHobbies(nhobbies);
  };

  const params = useParams();
  const { user_uuid } = params; // Access the `id` route parameter
  console.log(user_uuid);

  useEffect(() => {
    getProfile(user_uuid)
      .then(function (response) {
        console.log("RESPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user_uuid]);

  const handleClick = () => {
    if (
      !!profileFirstName &&
      !!profileLastName &&
      !!profileBio &&
      !!gender &&
      !!preference &&
      hobbies.length &&
      !!age &&
      !!points &&
      !!city
    ) {
      patchProfile({
        profileFirstName,
        profileLastName,
        profileBio,
        gender,
        preference,
        hobbies,
        age,
        points,
        city,
        user_uuid,
      })
        .then(function (response) {
          console.log(response);
          setAlert(true);
          // Navigate to the profile page
          // router.push(`/onboarding/${response.data.user_uuid}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      {(fullPage === true && (
        <ThemeProvider theme={theme}>
          <div className="flex flex-col w-full bg-gray-400">
            <Paper className="p-4 border border-white flex w-full justify-center items-center">
              <Ctitle opts="text-lg font-light" title="Matcha" />
              <Image
                className="w-6 md:w-10 h-auto"
                src={LeafImage}
                alt="leaf"
              />
              <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-4 text-xs md:text-base" />
            </Paper>
            <div className="flex w-full h-full p-12 bg-gray-400">
              <div className="flex w-full justify-center items-center">
                <div className="w-1/4"></div>
                <div>
                  <CprofileEdit
                    className="flex w-1/2"
                    city={city}
                    setCity={setCity}
                    hobbies={hobbies}
                    setHobbies={setHobbies}
                    hobby={hobby}
                    setHobby={setHobby}
                    age={age}
                    setAge={setAge}
                    gender={gender}
                    setGender={setGender}
                    preference={preference}
                    setPreference={setPreference}
                    profileFirstName={profileFirstName}
                    setProfileFirstName={setProfileFirstName}
                    profileLastName={profileLastName}
                    setProfileLastName={setProfileLastName}
                    profileBio={profileBio}
                    setProfileBio={setProfileBio}
                    points={points}
                    setPoints={setPoints}
                    handleCityChange={handleCityChange}
                    handlePreference={handlePreference}
                    handleAge={handleAge}
                    handleHobby={handleHobby}
                    addHobbies={addHobbies}
                    handleDelete={handleDelete}
                    handleClick={handleClick}
                  />
                </div>
                <div className="w-1/4"></div>
              </div>
            </div>
            <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
              Copyright
            </Paper>
          </div>
        </ThemeProvider>
      )) || (
        <CprofileEdit
          className="flex w-full justify-center items-center bg-gray-400 rounded-lg"
          city={city}
          setCity={setCity}
          hobbies={hobbies}
          setHobbies={setHobbies}
          hobby={hobby}
          setHobby={setHobby}
          age={age}
          setAge={setAge}
          gender={gender}
          setGender={setGender}
          preference={preference}
          setPreference={setPreference}
          profileFirstName={profileFirstName}
          setProfileFirstName={setProfileFirstName}
          profileLastName={profileLastName}
          setProfileLastName={setProfileLastName}
          profileBio={profileBio}
          setProfileBio={setProfileBio}
          points={points}
          setPoints={setPoints}
          handleCityChange={handleCityChange}
          handlePreference={handlePreference}
          handleAge={handleAge}
          handleHobby={handleHobby}
          addHobbies={addHobbies}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default _;
