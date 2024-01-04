import Header from "../Header";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
