import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const BasicLayout = ({ children }: { children: JSX.Element }) => {
  const [expandContainer, setExpandContainer] = useState(false);

  return (
    <div className="min-h-screen">
      <Header expandNavbar={setExpandContainer} />
      <div className="mt-4 flex">
        <Navbar isExpand={expandContainer} />
        <section className="h-layout w-full overflow-y-auto">
          {children}
        </section>
      </div>
    </div>
  );
};

export default BasicLayout;
