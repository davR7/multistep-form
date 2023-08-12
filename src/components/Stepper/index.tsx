import * as S from './style';
import { TiTick } from 'react-icons/ti';
import { useStepper } from '../../hooks/useStepper';

function Stepper({ stepsList }: { stepsList: string[] }) {
  const { step } = useStepper();
  const isActive = (index: number) => step.current === index + 1;
  const isComplete = (index: number) =>
    index + 1 < step.current || step.complete;

  return (
    <S.Stepper>
      <S.StepperInner>
        {stepsList &&
          stepsList.map((stepItem, i) => (
            <S.StepperItem
              key={i}
              $isActive={isActive(i)}
              $isComplete={isComplete(i)}
            >
              <S.StepperNum $isComplete={isComplete(i)} $isActive={isActive(i)}>
                {i + 1 < step.current || step.complete ? (
                  <TiTick size={26} />
                ) : (
                  i + 1
                )}
              </S.StepperNum>
              <S.StepperName $isComplete={isComplete(i)}>
                {stepItem}
              </S.StepperName>
            </S.StepperItem>
          ))}
      </S.StepperInner>
    </S.Stepper>
  );
}

export default Stepper;
