import styled, { css } from 'styled-components';
import * as M from '../../styles/mixins-styles';

type StepperProps = {
  $isActive?: boolean;
  $isComplete?: boolean;
};

export const Stepper = styled.div`
  margin: 20px 0;
`;

export const StepperInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StepperItem = styled.div<StepperProps>`
  position: relative;
  width: 100%;
  ${M.FlexColumn}

  &:not(:first-child):before {
    content: '';
    background-color: #e2e8f0;
    width: 100%;
    height: 5px;
    position: absolute;
    right: 50%;
    top: 30%;
  }

  ${props =>
    props.$isActive &&
    css`
      &:not(:first-child):before {
        background-color: #1b9a2a;
        color: #1b9a2a;
      }
    `}

  ${props =>
    props.$isComplete &&
    css`
      &:not(:first-child):before {
        background-color: #1b9a2a;
        color: #1b9a2a;
      }
    `}
`;

export const StepperNum = styled.div<StepperProps>`
  background-color: #6b7280;
  color: #e2e8f0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
  font-size: 1.4rem;
  transition: transform 500ms ease;
  transform: scale(0.9);
  z-index: 10;
  ${M.FlexRow}

  ${props =>
    props.$isActive &&
    css`
      border: 2px solid #1b9a2a;
    `}

  ${props =>
    props.$isComplete &&
    css`
      background-color: #1b9a2a;
      transform: scale(1);
    `}
`;

export const StepperName = styled.div<StepperProps>`
  color: #6b7280;
  ${props =>
    props.$isComplete &&
    css`
      color: #fff;
    `}
`;
