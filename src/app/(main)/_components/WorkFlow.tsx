import Heading from "@/components/commons/Heading";
import Timeline from "@/components/primitives/Timeline";

import { HOME_CONTENT } from "@/data/contents/home";

export default function WorkFlow() {
  const { title, heading, describe, timelines } = HOME_CONTENT.workflow;

  return (
    <section className="space-y-8 lg:space-y-12">
      <div className="lg:text-center">
        <Heading title={title} heading={heading} describe={describe} />
      </div>
      <div>
        <Timeline items={timelines} />
      </div>
    </section>
  );
}
