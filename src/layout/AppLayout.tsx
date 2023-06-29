import { ReactNode } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto grid h-screen max-w-[1660px] grid-cols-1 grid-rows-[5rem,1fr] md:grid-cols-[6rem,1fr]">
      <Header />
      <Navbar />
      <section className="overflow-y-auto pt-2 pb-4 pl-4 pr-4 md:pl-0">{children}</section>
    </div>
  );
};

export default AppLayout;
