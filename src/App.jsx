import styled from "styled-components";
import { Colors } from "./styles/Theme";

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppTitle = styled.h2`
  padding: 1.5rem;
  font-size: 2rem;
  border: 2px solid ${Colors.black};
  border-radius: 8px;
`;

function App() {
  return (
    <AppWrapper>
      <AppTitle>Vite Template - React + Styled Components</AppTitle>
    </AppWrapper>
  );
}

export default App;
