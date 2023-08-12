import * as S from './style';
import { BiErrorAlt } from 'react-icons/bi';

type InputProps = {
  label: string;
  value: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'date';
  error: string | undefined;
  handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputGroup({
  label,
  value,
  name,
  type,
  error,
  handlerChange,
}: InputProps) {
  return (
    <S.InputGroup>
      <S.Label>{label}</S.Label>
      <S.Input value={value} name={name} type={type} onChange={handlerChange} />
      {error && (
        <>
          <S.InputError>
            <BiErrorAlt size={20} />
            <div>{error}</div>
          </S.InputError>
        </>
      )}
    </S.InputGroup>
  );
}

export default InputGroup;
