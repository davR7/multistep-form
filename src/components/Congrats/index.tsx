import * as S from './style';
import { TiTick } from 'react-icons/ti';
import { useUser } from '../../hooks/useUser';

function Congrats() {
  const { user } = useUser();

  return (
    <S.Congrats>
      <S.CongratsHeader>
        <S.WrapIcon>
          <TiTick size={50} />
        </S.WrapIcon>
        <S.CongratsTitle>Meus Parabéns! :)</S.CongratsTitle>
        <S.CongratsText>Seu cadastro foi concluido com sucesso.</S.CongratsText>
      </S.CongratsHeader>
      <S.List>
        <li>Nome: {user.firstName}</li>
        <li>Sobrenome: {user.lastName}</li>
        <li>Usuario: {user.userName}</li>
        <li>E-mail: {user.email}</li>
        <li>Empresa: {user.currentCompany}</li>
        <li>Cargo: {user.designation}</li>
        <li>Inicio: {user.startDate}</li>
      </S.List>
    </S.Congrats>
  );
}

export default Congrats;
