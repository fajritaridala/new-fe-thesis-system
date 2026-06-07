import LucideIcon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { HOME_CONTENT } from "@/data/contents/home";
import Link from "next/link";

export default function Hero() {
  const { heading, sub, describe, cta } = HOME_CONTENT.hero;

  return (
    <section className="space-y-8 pt-24 lg:space-y-12 lg:pt-28">
      <div className="space-y-4 px-4 lg:space-y-8 lg:px-28">
        <h1 className="text-primary text-center capitalize">{sub}</h1>
        <h2 className="font-sora text-center text-4xl font-bold tracking-tight capitalize lg:text-6xl lg:leading-14">
          {heading}
        </h2>
        <p className="text-muted-foreground text-center leading-relaxed lg:px-22">
          {describe}
        </p>
      </div>
      <div className="flex flex-col justify-center-safe gap-2 lg:flex-row lg:gap-4">
        {cta.map(({ variant, href, label, icon }, index) => (
          <Button key={index} asChild size="lg" variant={variant}>
            <Link href={href}>
              <p>{label}</p>
              <LucideIcon icon={icon} />
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
