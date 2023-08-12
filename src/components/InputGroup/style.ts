import styled from 'styled-components';
import * as M from '../../styles/mixins-styles';

export const InputGroup = styled.div`
  position: relative;
  margin: 10px 0;
  label,
  input {
    display: block;
    width: 100%;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 5px;
  padding: 0.6rem;
  margin-bottom: 30px;
`;

export const InputError = styled.div`
  color: #ff6347;
  ${M.FlexRow}
  position: absolute;
  bottom: -25px;
  font-size: 0.8rem;
  div {
    padding-left: 5px;
  }
`;
