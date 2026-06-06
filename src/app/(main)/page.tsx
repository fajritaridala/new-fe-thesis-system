import { Metadata } from "next";
import Hero from "./_components/Hero";
import About from "./_components/About";
import WorkFlow from "./_components/WorkFlow";
import Action from "./_components/Action";

export const metadata: Metadata = {
  title: "Home - TOEFL Verification",
};

export default function Home() {
  return (
    <div className="space-y-8 lg:space-y-12">
      <Hero />
      <About />
      <WorkFlow />
      <Action />
    </div>
  );
}
