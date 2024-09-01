import React, { useState, ChangeEvent } from "react";
import Conboardingprofile from "./Conboardingprofile";
import Conboardinginfo from "./Conboardinginfo";
import Conboardingpicture from "./Conboardingpicture";
import { Button, Stepper, Step, StepLabel, Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation"; // for app directory
import { patchProfile } from "@/queries/user";
import { postPicture } from "@/queries/user";
import { useParams } from "next/navigation";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const steps = ["Create your profile", "Set your information", "Add pictures"];

interface ComponentProps {
  user_uuid: any;
  className: any;
}

interface StepContentProps {
  file: any;
  setFile: any;
  profileFirstName: any;
  setProfileFirstName: any;
  profileLastName: any;
  setProfileLastName: any;
  profileBio: any;
  setProfileBio: any;
  gender: any;
  setGender: any;
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
  handleCityChange: any;
  handleAge: any;
  handleHobby: any;
  handlePreference: any;
  addHobbies: any;
  handleDelete: any;
  title: any;
  setTitle: any;
  handleTitle: any;
  step: number;
  isStepValid: any;
  setIsStepValid: any;
}

const StepContent = ({
  file,
  setFile,
  profileFirstName,
  setProfileFirstName,
  profileLastName,
  setProfileLastName,
  profileBio,
  setProfileBio,
  gender,
  setGender,
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
  handleCityChange,
  handleAge,
  handleHobby,
  handlePreference,
  addHobbies,
  handleDelete,
  title,
  setTitle,
  handleTitle,
  step,
  isStepValid,
  setIsStepValid,
}: StepContentProps) => {
  switch (step) {
    case 0:
      return (
        <Conboardingprofile
          file={file}
          setFile={setFile}
          profileFirstName={profileFirstName}
          setProfileFirstName={setProfileFirstName}
          profileLastName={profileLastName}
          setProfileLastName={setProfileLastName}
          profileBio={profileBio}
          setProfileBio={setProfileBio}
          gender={gender}
          setGender={setGender}
          isValid={isStepValid}
          setIsValid={setIsStepValid}
          title={title}
          setTitle={setTitle}
          handleTitle={handleTitle}
        />
      );
    case 1:
      return (
        <Conboardinginfo
          isValid={isStepValid}
          setIsValid={setIsStepValid}
          city={city}
          setCity={setCity}
          hobby={hobby}
          setHobby={setHobby}
          hobbies={hobbies}
          setHobbies={setHobbies}
          age={age}
          setAge={setAge}
          preference={preference}
          setPreference={setPreference}
          handleCityChange={handleCityChange}
          handleAge={handleAge}
          handleHobby={handleHobby}
          handlePreference={handlePreference}
          addHobbies={addHobbies}
          handleDelete={handleDelete}
        />
      );
    case 2:
      return (
        <Conboardingpicture isValid={isStepValid} setIsValid={setIsStepValid} />
      );
    //   default:
    //     return <div>Unknown step</div>;
  }
};

const _: React.FC<ComponentProps> = ({ user_uuid, className }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isStepValid, setIsStepValid] = useState(false);
  const [alert, setAlert] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [city, setCity] = useState("");
  const [hobby, setHobby] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const [profileFirstName, setProfileFirstName] = useState("");
  const [profileLastName, setProfileLastName] = useState("");
  const [profileBio, setProfileBio] = useState("");
  const [hobbies, setHobbies] = useState([""]);
  const [points, setPoints] = useState(0.0);
  const router = useRouter();
  const [title, setTitle] = useState("");

  const handleTitle = (event: React.ChangeEvent<unknown>, value: string) => {
    setTitle(value);
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

  const handlePreference = (event: SelectChangeEvent) => {
    setPreference(event.target.value);
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

  const handleNext = () => {
    setAlert(false);
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    else setAlert(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClick = () => {
    patchProfile({
      profileFirstName,
      profileLastName,
      gender,
      preference,
      hobbies,
      profileBio,
      age,
      points,
      city,
      user_uuid,
    })
      .then(function (response) {
        console.log(response);
        // Navigate to the profile page
      })
      .catch(function (error) {
        console.log(error);
      });

    postPicture({ file, title, user_uuid })
      .then(function (response) {
        console.log(response);
        console.log("uuid:::", user_uuid);
        console.log("FILE:", file);
        console.log("TITLE", title);
      })
      .catch(function (error) {
        console.log(error);
      });
    router.push(`/profile/search/${user_uuid}`);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Stepper className={className} activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="mx-48 h-full">
        <StepContent
          file={file}
          setFile={setFile}
          profileFirstName={profileFirstName}
          setProfileFirstName={setProfileFirstName}
          profileLastName={profileLastName}
          setProfileLastName={setProfileLastName}
          profileBio={profileBio}
          setProfileBio={setProfileBio}
          gender={gender}
          setGender={setGender}
          city={city}
          setCity={setCity}
          hobby={hobby}
          setHobby={setHobby}
          hobbies={hobbies}
          setHobbies={setHobbies}
          age={age}
          setAge={setAge}
          preference={preference}
          setPreference={setPreference}
          handleCityChange={handleCityChange}
          handleAge={handleAge}
          handleHobby={handleHobby}
          handlePreference={handlePreference}
          addHobbies={addHobbies}
          handleDelete={handleDelete}
          step={activeStep}
          isStepValid={isStepValid}
          setIsStepValid={setIsStepValid}
          title={title}
          setTitle={setTitle}
          handleTitle={handleTitle}
        />
      </div>
      <div className="flex justify-center items-center text-gray-800 w-full h-full">
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <div className="flex text-gray-800 justify-center items-center h-full">
          {activeStep === steps.length - 1 ? (
            <Button color="inherit" onClick={handleReset}>
              Reset
            </Button>
          ) : (
            <Button color="inherit" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          )}
        </div>
      </div>
      {!isStepValid && alert && (
        <Alert className="rounded-lg text-gray-800 mx-48" severity="error">
          You must complete all fields to create your profile.
        </Alert>
      )}
      {activeStep == steps.length - 1 ? (
        <Button
          onClick={handleClick}
          className="self-center mt-8"
          variant="contained"
        >
          Create my profile
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default _;
