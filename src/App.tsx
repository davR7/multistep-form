import styled from 'styled-components';
import { GlobalProvider } from './contexts';
import UserSignup from './pages/UserSignup';

const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <GlobalProvider>
        <UserSignup />
      </GlobalProvider>
    </Container>
  );
}

export default App;
