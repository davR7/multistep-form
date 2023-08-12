import { useContext } from 'react';
import { UserContext } from '../contexts/user';

export function useUser() {
  const user = useContext(UserContext);
  return user;
}
