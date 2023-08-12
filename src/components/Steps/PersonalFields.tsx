import { useUser } from '../../hooks/useUser';
import { useError } from '../../hooks/useError';
import { UserProps } from '../../types';
import InputGroup from '../InputGroup';

function PersonalFields({ firstName, lastName, userName }: UserProps) {
  const { handlerUser } = useUser();
  const { error } = useError();

  return (
    <>
      <InputGroup
        label="Nome"
        type="text"
        name="firstName"
        value={firstName}
        handlerChange={handlerUser}
        error={error?.firstName}
      />
      <InputGroup
        label="Sobrenome"
        type="text"
        name="lastName"
        value={lastName}
        handlerChange={handlerUser}
        error={error?.lastName}
      />
      <InputGroup
        label="Nome de Usuário"
        type="text"
        name="userName"
        value={userName}
        handlerChange={handlerUser}
        error={error?.userName}
      />
    </>
  );
}

export default PersonalFields;
