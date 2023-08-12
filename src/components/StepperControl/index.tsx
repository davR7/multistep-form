import * as S from './style';
import { useStepper } from '../../hooks/useStepper';

function StepperControl({ stepsList }: { stepsList: string[] }) {
  const { step, handlerStep } = useStepper();

  const prevStep = () =>
    step.current !== 1 && handlerStep({ current: step.current - 1 });

  const disabledButton = () => step.current === 1;

  return (
    <S.StepperControl>
      <S.Button
        type="button"
        onClick={prevStep}
        disabled={step.current === 1}
        $deactivated={disabledButton()}
      >
        Voltar
      </S.Button>
      {step.current < stepsList.length && (
        <S.Button type="submit">Avançar</S.Button>
      )}
      {step.current === stepsList.length && (
        <S.Button type="submit">Enviar</S.Button>
      )}
    </S.StepperControl>
  );
}

export default StepperControl;
