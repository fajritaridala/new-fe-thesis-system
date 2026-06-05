import { Metadata } from "next";
import Hero from "./_components/Hero";
import About from "./_components/About";

export const metadata: Metadata = {
  title: "Home - TOEFL Verification",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
