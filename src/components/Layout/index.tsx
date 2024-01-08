import { DarkModeProvider } from "@/src/context/DarkModeContext";
import Header from "../Header";

const Layout = ({ children }: any) => {
  return (
    <DarkModeProvider>
      <Header />
      <main>{children}</main>
    </DarkModeProvider>
  );
};

export default Layout;
