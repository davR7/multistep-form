import * as S from './style';
import { UserProps } from '../../types';
import { stepsList } from '../../stepsList';
import { useError } from '../../hooks/useError';
import { useStepper } from '../../hooks/useStepper';
import { schema } from '../../schemas';
import { extractErrorYup } from '../../utils';

function FormDat({ children }: { children: React.ReactNode }) {
  const { step, handlerStep } = useStepper();
  const { handlerError, resetError } = useError();

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Partial<UserProps> = Object.fromEntries(formData);

    try {
      await schema[step.current - 1].validate(data, { abortEarly: false });
      resetError();
      if (step.current === stepsList.length) {
        handlerStep({ complete: true });
      } else {
        handlerStep({ current: step.current + 1 });
      }
    } catch (err) {
      const yupError = extractErrorYup(err);
      handlerError(yupError);
    }
  };

  return <S.Form onSubmit={handlerSubmit}>{children}</S.Form>;
}

export default FormDat;
