import React, { useState } from 'react';
import Conboardingprofile from './Conboardingprofile'
import Conboardinginfo from './Conboardinginfo'
import Conboardingpicture from './Conboardingpicture'
import { Button, Stepper, Step, StepLabel, Box } from '@mui/material';

const steps = ['Create your profile', 'Set your information', 'Add pictures'];

interface ComponentProps {
  }

interface StepContentProps {
    step: number;
    setIsStepValid: any
  }

const StepContent = ({ step, setIsStepValid }: StepContentProps) => {
    switch (step) {
      case 0:
        return <Conboardingprofile setIsValid={setIsStepValid} />;
      case 1:
        return <Conboardinginfo setIsValid={setIsStepValid} />;
      case 2:
        return <Conboardingpicture setIsValid={setIsStepValid} />;
    //   default:
    //     return <div>Unknown step</div>;
    }
  }

const _: React.FC<ComponentProps> = () => {

    const [activeStep, setActiveStep] = useState<number>(0);
    const [isStepValid, setIsStepValid] = useState(false)
  
    const handleNext = () => {
      if (isStepValid)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

  return (
    <form className="w-full h-full flex flex-col">
        <Stepper activeStep={activeStep}>
            { steps.map((label, index) => ( <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            )) }
        </Stepper>
        <div className="mx-48">
            <StepContent step={activeStep} setIsStepValid />
        </div>
        <div className="flex justify-center items-center text-gray-800 w-full">
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
            Back
            </Button>
            <div className="flex text-gray-800 justify-center items-center">
                { activeStep === steps.length - 1 ?
                  <Button color="inherit" onClick={handleReset}>Reset</Button>
                  :
                  <Button type="submit" color="inherit" onClick={handleNext}>
                      { activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                }
            </div>
        </div>
        { activeStep == steps.length - 1 ? <Button className="self-center mt-8" variant="contained">Create my profile</Button> : <></> }
      </form>
  );
}

export default _