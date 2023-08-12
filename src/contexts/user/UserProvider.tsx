import { useState } from 'react';
import { UserProps } from '../../types';
import { UserContext, DEFAULT_VALUE } from './UserContext';

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProps>(DEFAULT_VALUE.user);

  const handlerUser = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <UserContext.Provider value={{ user, handlerUser }}>
      {children}
    </UserContext.Provider>
  );
}
