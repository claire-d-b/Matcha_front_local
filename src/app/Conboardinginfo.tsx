"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctitle from "./Ctitle";
import Cnav from "./Cnav";
import Image from "next/image";
import LeafImage from "../../public/images/leaf.png";
import theme from "./theme";
import Cstepper from "./Cstepper";
import Ctextfield from "./Ctextfield";
import Cselect from "./Cselect";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { patchProfile } from "@/queries/user";
import { useParams } from "next/navigation";

const lst = ["M", "F", "-"];

interface ComponentProps {
  required?: any;
  isValid: any;
  setIsValid: any;
  city: any;
  setCity: any;
  hobby: any;
  setHobby: any;
  hobbies: any;
  setHobbies: any;
  age: any;
  setAge: any;
  preference: any;
  setPreference: any;
}

const _: React.FC<ComponentProps> = ({
  required,
  isValid,
  setIsValid,
  city,
  setCity,
  hobby,
  setHobby,
  hobbies,
  setHobbies,
  age,
  setAge,
  preference,
  setPreference,
}) => {
  const params = useParams();
  const { user_uuid } = params; // Access the `id` route parameter
  console.log(user_uuid);

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleHobby = (e: ChangeEvent<HTMLInputElement>) => {
    setHobby(e.target.value);
  };

  const handlepreference = (e: ChangeEvent<HTMLInputElement>) => {
    setPreference(e.target.value);
    console.log("preference:", preference);
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

  //   useEffect(() => {
  //     console.log("chip array has changed");
  //   }, [hobbies]);

  useEffect(() => {
    console.log("lEN:", hobbies.length);
    console.log("city", !!city);
    console.log("city", !!preference);
    console.log("city", !!age);
    if (!!preference && !!city && hobbies.length > 1 && !!age) {
      setIsValid(true);
    } else setIsValid(false);
  }, [city, hobbies, age, preference]);

  return (
    <div className="h-full w-full p-8">
      <div className="flex flex-col gap-8 h-full">
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 rounded-lg">
          <div className="p-8 flex flex-col gap-4 w-full text-md font-thin">
            <div className="flex items-center justify-start gap-2">
              <div className="font-thin text-md">Location</div>
              <IconButton size="small" disabled>
                <SearchIcon />
              </IconButton>
            </div>
            <Ctextfield
              opts="w-full md:w-1/2"
              type="text"
              size="small"
              variant="outlined"
              label="City"
              value={city}
              multiline={false}
              onChange={handleCityChange}
              disabled={false}
              required
            />
          </div>
          <div className="p-8 font-thin flex flex-col w-full justify-center items-start gap-4">
            <div className="font-thin text-md">Interests</div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex flex-wrap gap-2 justify-center items-between">
                <Ctextfield
                  opts="w-full self-start font-thin"
                  type="text"
                  size="small"
                  variant="outlined"
                  label={"Interest"}
                  value={hobby}
                  multiline={false}
                  onChange={handleHobby}
                  required
                />
                {hobbies.length &&
                  hobbies.map((h, i) => (
                    <div key={`hobbies_${i}`}>
                      <Chip
                        label={h}
                        className={
                          i === 0
                            ? "bg-gray-600 text-white hidden"
                            : "bg-gray-600 text-white"
                        }
                        variant="filled"
                        onDelete={handleDelete}
                      />
                    </div>
                  ))}
              </div>
              <IconButton
                className="mb-2 bg-gray-800"
                size="small"
                onClick={addHobbies}
              >
                <AddIcon />
              </IconButton>
              <p className="text-sm font-thin">
                Share your interests & hobbies.
              </p>
            </div>
          </div>
          <div className="p-8 flex flex-col gap-4 w-full font-thin justify-center items-start">
            <div className="flex justify-center items-center gap-20">
              <div className="flex flex-col items-start justify-start gap-4 font-thin w-full">
                Preferences
                <div className="w-full">
                  <Cselect
                    name="Preferences"
                    list={lst}
                    variant="outlined"
                    value={preference}
                    onChange={handlepreference}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-4 font-thin">
                Age
                <Ctextfield
                  opts="self-start"
                  type="text"
                  size="small"
                  variant="outlined"
                  label={"Age"}
                  value={age}
                  multiline={false}
                  onChange={handleAge}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default _;
