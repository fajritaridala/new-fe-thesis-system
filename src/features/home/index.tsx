import { HOME_CONTENT } from "@/data/contents/main/home-content";
import Hero from "./_component/hero-section";
import About from "./_component/about-section";
import WorkFlow from "./_component/workflow-section";
import Action from "./_component/action-section";

export default function HomeContainer() {
  const { hero, about, workflow, action } = HOME_CONTENT;

  return (
    <div className="space-y-12 lg:space-y-24">
      <Hero data={hero} />
      <About data={about} />
      <WorkFlow data={workflow} />
      <Action data={action} />
    </div>
  );
}
