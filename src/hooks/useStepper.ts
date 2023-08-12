import { useContext } from 'react';
import { StepperContext } from '../contexts/stepper';

export function useStepper() {
  const stepper = useContext(StepperContext);
  return stepper;
}
