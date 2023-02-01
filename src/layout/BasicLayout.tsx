import Header from "../components/Header";
import Navbar from "../components/Navbar";

const BasicLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex mt-6">
        <Navbar />
        <section className="h-[88.5vh] overflow-y-auto">{children}</section>
      </div>
    </div>
  );
};

export default BasicLayout;
