import React, { useState } from "react";
import Conboardingprofile from "./Conboardingprofile";
import Conboardinginfo from "./Conboardinginfo";
import Conboardingpicture from "./Conboardingpicture";
import { Button, Stepper, Step, StepLabel, Box } from "@mui/material";
import Alert from "@mui/material/Alert";

const steps = ["Create your profile", "Set your information", "Add pictures"];

interface ComponentProps {
  className: any;
}

interface StepContentProps {
  step: number;
  isStepValid: any;
  setIsStepValid: any;
}

const StepContent = ({
  step,
  isStepValid,
  setIsStepValid,
}: StepContentProps) => {
  switch (step) {
    case 0:
      return (
        <Conboardingprofile isValid={isStepValid} setIsValid={setIsStepValid} />
      );
    case 1:
      return (
        <Conboardinginfo isValid={isStepValid} setIsValid={setIsStepValid} />
      );
    case 2:
      return (
        <Conboardingpicture isValid={isStepValid} setIsValid={setIsStepValid} />
      );
    //   default:
    //     return <div>Unknown step</div>;
  }
};

const _: React.FC<ComponentProps> = ({ className }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isStepValid, setIsStepValid] = useState(false);
  const [alert, setAlert] = useState(false);

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
          step={activeStep}
          isStepValid={isStepValid}
          setIsStepValid={setIsStepValid}
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
            <Button type="submit" color="inherit" onClick={handleNext}>
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
        <Button className="self-center mt-8" variant="contained">
          Create my profile
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default _;
