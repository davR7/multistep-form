import InputGroup from '../InputGroup';
import { useUser } from '../../hooks/useUser';
import { useError } from '../../hooks/useError';
import { UserProps } from '../../types';

function ProfessionalFields({
  currentCompany,
  designation,
  startDate,
}: UserProps) {
  const { handlerUser } = useUser();
  const { error } = useError();

  return (
    <>
      <InputGroup
        label="Empresa Atual"
        type="text"
        name="currentCompany"
        value={currentCompany}
        handlerChange={handlerUser}
        error={error?.currentCompany}
      />
      <InputGroup
        label="Cargo"
        type="text"
        name="designation"
        value={designation}
        handlerChange={handlerUser}
        error={error?.designation}
      />
      <InputGroup
        label="Inicio"
        type="date"
        name="startDate"
        value={startDate}
        handlerChange={handlerUser}
        error={error?.startDate}
      />
    </>
  );
}

export default ProfessionalFields;
