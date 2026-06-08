import { Heading } from "@/components/shared/heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LucideIcon from "@/components/shared/lucide-icon";
import { HOME_CONTENT } from "@/data/contents/main/home-content";

interface AboutSectionProps {
  data: typeof HOME_CONTENT.about;
}

export default function About({ data }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="bg-background-light grid grid-cols-1 gap-6 px-4 py-8 lg:gap-12 lg:rounded-2xl lg:px-8 lg:py-16"
    >
      <div className="lg:text-center">
        <Heading
          title={data.title}
          headline={data.heading}
          description={data.describe}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {data.cards.map(({ title, describe, icon, color }, index) => (
          <Card
            key={index}
            className="bg-background lg:bg-background-light border-border rounded-2xl border shadow-none ring-0 transition-all delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="font-sora flex flex-col gap-4 text-xl font-bold tracking-tight capitalize lg:gap-6 lg:text-3xl">
                <LucideIcon
                  icon={icon}
                  className={`size-8 lg:size-10 text-${color}`}
                />
                <span>{title}</span>
              </CardTitle>
              <CardDescription className="text-base leading-relaxed lg:text-left">
                {describe}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
