import { useContext } from 'react';
import { ErrorContext } from '../contexts/error';

export function useError() {
  const error = useContext(ErrorContext);
  return error;
}
