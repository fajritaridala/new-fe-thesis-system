import { Heading } from "@/components/common/Heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HOME_CONTENT } from "@/data/contents/main/home";

export default function About() {
  const { title, heading, describe, cards } = HOME_CONTENT.about;

  return (
    <section className="bg-background-light grid grid-cols-1 gap-6 px-4 py-8 lg:gap-12 lg:rounded-2xl lg:px-8 lg:py-16">
      <div className="lg:text-center">
        <Heading title={title} headline={heading} description={describe} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {cards.map(({ title, describe }, index) => (
          <Card
            key={index}
            className="bg-background lg:bg-background-light border-border rounded-2xl border shadow-none ring-0 transition-all delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="font-sora text-xl font-bold tracking-tight capitalize lg:text-3xl">
                {title}
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
