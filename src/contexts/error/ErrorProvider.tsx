import { useState } from 'react';
import { UserProps } from '../../types';
import { ErrorContext } from './ErrorContext';

export function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<Partial<UserProps> | null>(null);

  const resetError = () => {
    setError({});
  };

  const handlerError = (obj: Partial<UserProps>) => {
    setError({ ...error, ...obj });
  };

  return (
    <ErrorContext.Provider value={{ error, handlerError, resetError }}>
      {children}
    </ErrorContext.Provider>
  );
}
