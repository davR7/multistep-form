import { createContext } from 'react';
import { UserProps } from '../../types';
import { USER_DATA } from '../../constants';

export const DEFAULT_VALUE = {
  user: { ...USER_DATA },
  handlerUser: () => {},
};

type ContextProps = {
  user: UserProps;
  handlerUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UserContext = createContext<ContextProps>(DEFAULT_VALUE);
