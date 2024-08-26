"use client";

import React, {
  useState,
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useEffect,
} from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctextfield from "./Ctextfield";
import Cprofile from "./Cprofile";
import Cselect from "./Cselect";
import theme from "./theme";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Alert from "@mui/material/Alert";
import { patchProfile } from "@/queries/user";
import { getProfile } from "@/queries/user";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Crating from "./Crating";

const lst = ["M", "F", "-"];

interface ComponentProps {
  className: any;
  city: any;
  setCity: any;
  hobbies: any;
  setHobbies: any;
  hobby: any;
  setHobby: any;
  age: any;
  setAge: any;
  gender: any;
  setGender: any;
  preference: any;
  setPreference: any;
  profileFirstName: any;
  setProfileFirstName: any;
  profileLastName: any;
  setProfileLastName: any;
  profileBio: any;
  setProfileBio: any;
  points: any;
  setPoints: any;
  handleCityChange: any;
  handlePreference: any;
  handleAge: any;
  handleHobby: any;
  addHobbies: any;
  handleDelete: any;
  handleClick: any;
}

const _: React.FC<ComponentProps> = ({
  className,
  city,
  setCity,
  hobbies,
  setHobbies,
  hobby,
  setHobby,
  age,
  setAge,
  gender,
  setGender,
  preference,
  setPreference,
  profileFirstName,
  setProfileFirstName,
  profileLastName,
  setProfileLastName,
  profileBio,
  setProfileBio,
  points,
  setPoints,
  handleCityChange,
  handlePreference,
  handleAge,
  handleHobby,
  addHobbies,
  handleDelete,
  handleClick,
}) => {
  // const [city, setCity] = useState("");
  // const [hobbies, setHobbies] = useState([""]);
  // const [hobby, setHobby] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [preference, setPreference] = useState("");
  // const [profileFirstName, setProfileFirstName] = useState("");
  // const [profileLastName, setProfileLastName] = useState("");
  // const [profileBio, setProfileBio] = useState("");
  // const [points, setPoints] = useState(0.0);
  const [alert, setAlert] = useState(false);

  // const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setCity(e.target.value);
  // };

  // const handlePreference = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPreference(e.target.value);
  // };

  // const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
  //   setAge(e.target.value);
  // };

  // const handleHobby = (e: ChangeEvent<HTMLInputElement>) => {
  //   setHobby(e.target.value);
  // };

  // const addHobbies = () => {
  //   if (hobby.length) {
  //     const nhobbies = [...hobbies];
  //     nhobbies.push(hobby);
  //     setHobbies(nhobbies);
  //   }
  // };

  // const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
  //   const nhobbies = [...hobbies];
  //   nhobbies.splice(hobbies.indexOf(e.target.value), 1);
  //   setHobbies(nhobbies);
  // };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full p-8 gap-4 flex flex-col justify-center items-center">
        <Cprofile
          imagePath="../../../images/people_f.png"
          name="editable"
          className="w-full h-full p-1 md:p-8 bg-gray-200 rounded-lg h-full"
          edit={true}
          profileFirstName={profileFirstName}
          profileLastName={profileLastName}
          profileBio={profileBio}
          setProfileFirstName={setProfileFirstName}
          setProfileLastName={setProfileLastName}
          setProfileBio={setProfileBio}
          gender={gender}
          setGender={setGender}
        />
        <div className="w-full p-8 gap-4 flex flex-col justify-center items-center bg-gray-200 rounded-lg">
          <div className="rounded-lg flex flex-col gap-4 w-full text-lg font-thin">
            <Paper className="p-8 w-full font-thin text-md rounded-lg">
              <Crating
                className="w-full"
                rating={points}
                setPoints={setPoints}
                precision={0.5}
              />
            </Paper>
            <Paper className="flex flex-col md:flex-row flex-wrap items-center justify-start gap-2 p-8">
              <div className="font-thin text-md">Location</div>
              <IconButton size="small" disabled>
                <SearchIcon />
              </IconButton>
              <Ctextfield
                opts=""
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
            </Paper>
          </div>
          <Paper className="p-8 rounded-lg text-lg font-thin flex flex-col w-full justify-center items-between gap-4">
            <div className="font-thin text-md">Interests</div>
            <div className="flex flex-col justify-center items-start">
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
                className="self-end bg-gray-800"
                size="small"
                onClick={addHobbies}
              >
                <AddIcon />
              </IconButton>
            </div>
          </Paper>
          <div className="flex flex-col md:flex-row w-full gap-4">
            <Paper className="w-full p-8 rounded-lg flex flex-col gap-4 w-full font-thin justify-center items-start">
              <div className="flex items-center justify-start gap-2 font-thin">
                Sexual preferences
              </div>
              {/* <Ctextfield opts="w-full rounded-lg p-4 text-sm" type="text" size="small" variant="outlined" multiline={true} rows={6} value={objective} onChange={handleObjective} /> */}
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full">
                  <Ctextfield
                    opts="w-full"
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
                <div className="w-full">
                  <Cselect
                    className=""
                    name="Gender"
                    list={lst}
                    value={preference}
                    onChange={handlePreference}
                    variant="outlined"
                    required
                  />
                </div>
              </div>
            </Paper>
            <Paper className="w-full rounded-lg">
              <a
                href="/profile/picture/"
                className="p-8 flex w-full font-thin text-md justify-center items-start"
              >
                Click here to see your pictures
              </a>
            </Paper>
          </div>
          <Button
            onClick={handleClick}
            //   type="submit"
            //   onSubmit={handleSubmit}
            className="self-end"
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
      {alert && (
        <Alert className="rounded-lg text-gray-800 mx-48" severity="success">
          Your profile has been succesfully updated.
        </Alert>
      )}
    </div>
  );
};

export default _;
