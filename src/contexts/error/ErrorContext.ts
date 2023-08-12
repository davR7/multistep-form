import { createContext } from 'react';
import { UserProps } from '../../types';

type ContextProps = {
  error: Partial<UserProps> | null;
  handlerError: (obj: Partial<UserProps>) => void;
  resetError: () => void;
};

export const ErrorContext = createContext({} as ContextProps);
