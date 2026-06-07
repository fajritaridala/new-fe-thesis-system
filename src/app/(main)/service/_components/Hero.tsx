import { SERVICE_CONTENT } from "@/data/contents/main/service";

export default function HeroService() {
  const { heading, description, title } = SERVICE_CONTENT;

  return (
    <section className="space-y-4 pt-24 text-center lg:space-y-8 lg:pt-28">
      <h1 className="text-primary">{title}</h1>
      <h2 className="font-sora text-3xl leading-tight font-bold tracking-tight lg:px-56 lg:text-6xl lg:leading-14">
        {heading}
      </h2>
      <p className="text-muted-foreground leading-relaxed lg:px-56">
        {description}
      </p>
    </section>
  );
}
