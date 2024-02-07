import { Outlet } from "react-router";
import { Wrapper } from "./app-style";
import Header from "./components/Header";

function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default App;
