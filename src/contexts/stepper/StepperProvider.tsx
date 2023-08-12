import { useState } from 'react';
import { StepperContext, StepProps, DEFAULT_VALUE } from './StepperContext';

export function StepperProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<StepProps>(DEFAULT_VALUE.step);

  const handlerStep = (obj: Partial<StepProps>) => {
    setStep({ ...step, ...obj });
  };

  return (
    <StepperContext.Provider value={{ step, handlerStep, setStep }}>
      {children}
    </StepperContext.Provider>
  );
}
