import styled, { css } from 'styled-components';

type ButtonProps = {
  type: 'button' | 'submit';
  disabled?: boolean;
  $deactivated?: boolean;
};

export const StepperControl = styled.div`
  margin: 40px 0;
`;

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px 15px;
  margin-right: 10px;

  ${props =>
    props.$deactivated &&
    css`
      background-color: #6b7280;
      cursor: not-allowed;
    `}
`;
