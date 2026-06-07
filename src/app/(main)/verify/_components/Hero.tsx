import { VERIFY_CONTENT } from "@/data/contents/verify";

export default function HeroVerify() {
  const { title, heading, description } = VERIFY_CONTENT;

  return (
    <section className="space-y-4 lg:space-y-8 lg:pt-28 pt-24 text-center">
      <h1 className="text-primary">{title}</h1>
      <h2 className="font-sora text-3xl leading-tight font-bold lg:text-6xl lg:px-56 tracking-tight lg:leading-14">
        {heading}
      </h2>
      <p className="text-muted-foreground leading-relaxed lg:px-52">{description}</p>
    </section>
  );
}
