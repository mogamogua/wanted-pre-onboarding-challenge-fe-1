import styled from "styled-components";
import Routers from "./pages/Routers";
import colors from "./styles/colors";

function App() {
  return (
    <div className="App">
      <Background>
        <Routers />
      </Background>
    </div>
  );
}

export default App;

const Background = styled.div`
  background-color: ${colors.bgGray};
  padding-top: 1rem;
  height: 100%;
`;
