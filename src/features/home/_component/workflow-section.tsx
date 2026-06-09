import { Heading } from "@/components/shared/heading";
import Timeline from "@/components/shared/timeline";
import { HOME_CONTENT } from "@/data/contents/main/home-content";

interface WorkFlowSectionProps {
  data: typeof HOME_CONTENT.workflow;
}

export default function WorkFlow({ data }: WorkFlowSectionProps) {
  return (
    <section
      id="workflow"
      className="scroll-mt-24 space-y-8 lg:scroll-mt-28 lg:space-y-12"
    >
      <div className="lg:text-center">
        <Heading
          title={data.title}
          headline={data.heading}
          description={data.describe}
        />
      </div>
      <div>
        <Timeline items={data.timelines} />
      </div>
    </section>
  );
}
