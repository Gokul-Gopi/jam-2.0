import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  const [expandContainer, setExpandContainer] = useState(false);

  return (
    <div className="grid h-screen grid-cols-[6rem,1fr] grid-rows-[5rem,1fr]">
      <Header expandNavbar={setExpandContainer} />
      <Navbar isExpand={expandContainer} />
      <section className="h-full overflow-y-auto py-4 pr-4">{children}</section>
    </div>
  );
};

export default AppLayout;
