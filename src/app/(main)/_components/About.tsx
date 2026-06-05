import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HOME_CONTENT } from "@/data/contents/home";

export default function About() {
  const { title, heading, describe, cards } = HOME_CONTENT.about;

  return (
    <section className="bg-muted mt-12 flex-col rounded-xl px-4 py-6 lg:mt-16 lg:flex lg:gap-6 lg:rounded-4xl lg:px-8 lg:py-12">
      <div className="lg:text-center">
        <h1 className="text-primary mb-3 text-xs uppercase lg:mb-6 lg:text-sm">
          {title}
        </h1>
        <h2 className="font-sora mb-6 text-3xl leading-tight font-bold tracking-tight lg:mb-8 lg:px-52 lg:text-4xl">
          {heading}
        </h2>
        <p className="text-muted-foreground text-justify text-base leading-relaxed lg:px-46 lg:text-center lg:text-lg">
          {describe}
        </p>
      </div>
      <div className="mt-8 grid-cols-3 gap-6 space-y-8 lg:grid lg:space-y-0">
        {cards.map((card, index) => (
          <Card key={index} className="bg-background rounded-xl lg:text-center">
            <CardHeader>
              <CardTitle className="font-sora my-2 text-xl font-bold tracking-tight capitalize lg:text-2xl">
                {card.title}
              </CardTitle>
              <CardDescription>{card.describe}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
