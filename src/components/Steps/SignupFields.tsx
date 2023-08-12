import { useUser } from '../../hooks/useUser';
import { useError } from '../../hooks/useError';
import { UserProps } from '../../types';
import InputGroup from '../InputGroup';

function SignupFields({ email, password, passConfirm }: UserProps) {
  const { handlerUser } = useUser();
  const { error } = useError();

  return (
    <>
      <InputGroup
        label="Email"
        type="email"
        name="email"
        value={email}
        handlerChange={handlerUser}
        error={error?.email}
      />
      <InputGroup
        label="Senha"
        type="password"
        name="password"
        value={password}
        handlerChange={handlerUser}
        error={error?.password}
      />
      <InputGroup
        label="Confirme Senha"
        type="password"
        name="passConfirm"
        value={passConfirm}
        handlerChange={handlerUser}
        error={error?.passConfirm}
      />
    </>
  );
}

export default SignupFields;
