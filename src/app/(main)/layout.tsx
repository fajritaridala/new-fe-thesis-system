import Navbar from "@/components/layouts/Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout(props: Props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main className="bg-background h-1000 px-4 lg:px-18">{children}</main>
    </>
  );
}
