import { useUser } from '../../hooks/useUser';
import SignupFields from '../Steps/SignupFields';
import PersonalFields from '../Steps/PersonalFields';
import ProfessionalFields from '../Steps/ProfessionalFields';

function DisplayStep({ currentStep }: { currentStep: number }) {
  const { user } = useUser();

  switch (currentStep) {
    case 1:
      return <SignupFields {...user} />;
    case 2:
      return <PersonalFields {...user} />;
    case 3:
      return <ProfessionalFields {...user} />;
    default:
  }
}

export default DisplayStep;
