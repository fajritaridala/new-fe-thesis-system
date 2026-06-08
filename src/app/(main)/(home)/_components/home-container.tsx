import { HOME_CONTENT } from "@/data/contents/main/home-content";
import About from "./about-section";
import Action from "./action-section";
import Hero from "./hero-section";
import WorkFlow from "./workflow-section";

export default function HomeContainer() {
  const { hero, about, workflow, action } = HOME_CONTENT;

  return (
    <div className="space-y-8 lg:space-y-12">
      <Hero data={hero} />
      <About data={about} />
      <WorkFlow data={workflow} />
      <Action data={action} />
    </div>
  );
}
