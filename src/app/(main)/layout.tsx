import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout(props: Props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-18 h-1000">{children}</main>
    </>
  );
}
