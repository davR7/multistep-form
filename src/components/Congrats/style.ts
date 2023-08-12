import styled from 'styled-components';
import * as M from '../../styles/mixins-styles';

export const Congrats = styled.div`
  height: 100vh;
  ${M.FlexColumn}
`;

export const CongratsHeader = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin: 20px 0;
  ${M.FlexColumn}
`;

export const CongratsTitle = styled.h3`
  font-size: 1.5rem;
  margin: 20px 0;
`;

export const CongratsText = styled.p`
  font-size: 1rem;
`;

export const WrapIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #31ca43;
  ${M.FlexRow}
`;

export const List = styled.ul`
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
  width: 80%;
`;
