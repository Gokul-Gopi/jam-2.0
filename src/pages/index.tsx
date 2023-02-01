import { Inter } from "@next/font/google";

import BasicLayout from "../layout/BasicLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BasicLayout>
      <div>Lorem2000</div>
    </BasicLayout>
  );
}
