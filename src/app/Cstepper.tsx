import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Create your profile', 'Set your information', 'Add pictures'];

interface ComponentProps {
}

const _: React.FC<ComponentProps> = () => {
  const isStepFailed = (step: number) => {
    return step === 1;
  };

  return (
    <div>
        <Stepper activeStep={1}>
        { steps.map((label, index) => { const labelProps: { optional?: React.ReactNode; error?: boolean; } = {};
        //   if (isStepFailed(index)) {
        //     labelProps.optional = (
        //       <div>
        //         Alert message
        //       </div>
        //     )
        //     labelProps.error = true
        //   }
          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

export default _