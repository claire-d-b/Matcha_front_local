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
  }

const StepContent = ({ step }: StepContentProps) => {
    switch (step) {
      case 0:
        return <Conboardingprofile />;
      case 1:
        return <Conboardinginfo />;
      case 2:
        return <Conboardingpicture />;
    //   default:
    //     return <div>Unknown step</div>;
    }
  }

const _: React.FC<ComponentProps> = () => {

    const [activeStep, setActiveStep] = useState<number>(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

  return (
    <div>
        <Stepper activeStep={activeStep}>
            { steps.map((label, index) => ( <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            )) }
        </Stepper>
        <div>
            <StepContent step={activeStep} />
        </div>
        <div className="flex justify-center items-center text-gray-800 w-full">
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
            Back
            </Button>
            <div className="flex text-gray-800 justify-center items-center">
                { activeStep === steps.length - 1 ? <Button color="inherit" onClick={handleReset}>Reset</Button>
                  :
                  <Button color="inherit" onClick={handleNext}>
                      { activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                }
            </div>
        </div>
      </div>
  );
}

export default _