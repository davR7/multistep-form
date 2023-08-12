import { createContext } from 'react';

export const DEFAULT_VALUE = {
  step: {
    current: 1,
    complete: false,
  },
  setStep: () => {},
  handlerStep: () => {},
};

export type StepProps = {
  current: number;
  complete: boolean;
};

type ContextProps = {
  step: StepProps;
  setStep: React.Dispatch<React.SetStateAction<StepProps>>;
  handlerStep: (obj: Partial<StepProps>) => void;
};

export const StepperContext = createContext<ContextProps>(DEFAULT_VALUE);
