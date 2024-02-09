import { Outlet } from "react-router";
import { MainContainer, Wrapper } from "./app-style";
import Header from "./components/Header";

function App() {
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </Wrapper>
  );
}

export default App;
