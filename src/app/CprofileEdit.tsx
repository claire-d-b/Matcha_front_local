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
import { getProfile } from "@/queries/user";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

const lst = ["M", "F", "-"];

const _ = () => {
  const params = useParams();
  const { id } = params; // Access the `id` route parameter
  console.log(id);

  const [language, setLanguage] = useState("");
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState([""]);
  const [hobby, setHobby] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState({});
  const [profileFirstName, setProfileFirstName] = useState("");
  const [profileLastName, setProfileLastName] = useState("");
  const [profileBio, setProfileBio] = useState("");

  const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    const router = useRouter();
    const { id } = router.query; // Extract the dynamic id from the URL
    getProfile({ id })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   console.log("chip array has changed");
  // }, [hobbies]);

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col">
        <div className="w-full flex flex-col items-center justify-center bg-gray-200 rounded-lg">
          <Cprofile
            imagePath="../../../images/people_f.png"
            name="editable"
            className="w-full p-1 md:p-8 bg-transparent rounded-lg"
            edit={true}
            profileFirstName={profileFirstName}
            profileLastName={profileLastName}
            profileBio={profileBio}
            setProfileFirstName={setProfileFirstName}
            setProfileLastName={setProfileLastName}
            setProfileBio={setProfileBio}
          />
          <form
            onSubmit={handleSubmit}
            className="w-full p-8 gap-4 flex flex-col justify-center items-center"
          >
            <Paper className="p-8 rounded-lg flex flex-col gap-4 w-full text-lg font-thin">
              <div className="flex items-center justify-start gap-2">
                <div className="font-thin text-md">Location</div>
                <IconButton size="small" disabled>
                  <SearchIcon />
                </IconButton>
              </div>
              <Stack direction="row" spacing={1}>
                <Ctextfield
                  opts=""
                  type="text"
                  size="small"
                  variant="outlined"
                  label="Language"
                  value={language}
                  multiline={false}
                  onChange={handleLanguageChange}
                  disabled={false}
                />
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
                />
              </Stack>
            </Paper>
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
              <Paper className="w-1/2 p-8 rounded-lg flex flex-col gap-4 w-full font-thin justify-center items-start">
                <div className="flex items-center justify-start gap-2 font-thin">
                  Sexual preferences
                </div>
                {/* <Ctextfield opts="w-full rounded-lg p-4 text-sm" type="text" size="small" variant="outlined" multiline={true} rows={6} value={objective} onChange={handleObjective} /> */}
                <div className="w-full flex justify-start items-center gap-2">
                  <Ctextfield
                    opts="self-start"
                    type="text"
                    size="small"
                    variant="outlined"
                    label={"Age"}
                    value={age}
                    multiline={false}
                    onChange={handleAge}
                  />
                  <Cselect
                    className="w-full"
                    name="Gender"
                    list={lst}
                    variant="outlined"
                  />
                </div>
              </Paper>
              <Paper className="w-1/2 rounded-lg">
                <a
                  href="/profile/picture/"
                  className="p-8 flex w-full font-thin text-md justify-center items-start"
                >
                  Click here to see your pictures
                </a>
              </Paper>
            </div>
            <Button
              type="submit"
              //   type="submit"
              //   onSubmit={handleSubmit}
              className="self-end"
              variant="contained"
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default _;
