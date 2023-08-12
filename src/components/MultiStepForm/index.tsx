import * as S from './style';
import { stepsList } from '../../stepsList';
import { useStepper } from '../../hooks/useStepper';
import Stepper from '../../components/Stepper';
import FormDat from '../../components/FormDat';
import DisplayStep from '../../components/DisplayStep';
import StepperControl from '../../components/StepperControl';
import Congrats from '../../components/Congrats';

function MultiStepForm() {
  const { step } = useStepper();

  return (
    <S.FormWrap>
      {!step.complete && (
        <>
          <Stepper stepsList={stepsList} />
          <S.FormTitle>{stepsList[step.current - 1]}</S.FormTitle>
          <FormDat>
            {DisplayStep({ currentStep: step.current })}
            <StepperControl stepsList={stepsList} />
          </FormDat>
        </>
      )}
      {step.complete && <Congrats />}
    </S.FormWrap>
  );
}

export default MultiStepForm;
