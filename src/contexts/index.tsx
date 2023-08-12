import { StepperProvider } from './stepper/StepperProvider';
import { UserProvider } from './user/UserProvider';
import { ErrorProvider } from './error/ErrorProvider';

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <StepperProvider>
      <UserProvider>
        <ErrorProvider>{children}</ErrorProvider>
      </UserProvider>
    </StepperProvider>
  );
}
