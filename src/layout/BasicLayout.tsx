import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const BasicLayout = ({ children }: { children: JSX.Element }) => {
  const [expandContainer, setExpandContainer] = useState(false);

  return (
    <div className="min-h-screen">
      <Header expandNavbar={setExpandContainer} />
      <div className="flex mt-4">
        <Navbar isExpand={expandContainer} />
        <section className="h-[86.5vh] overflow-y-auto">{children}</section>
      </div>
    </div>
  );
};

export default BasicLayout;
