import LucideIcon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { HOME_CONTENT } from "@/data/contents/home";
import Link from "next/link";

export default function Hero() {
  const { heading, sub, describe, cta } = HOME_CONTENT.hero;

  return (
    <section className="pt-18">
      <div className="px-3 lg:px-28">
        <p className="text-primary mt-8 text-center text-sm capitalize lg:text-base">
          {sub}
        </p>
        <h1 className="font-sora my-6 text-center text-4xl leading-tight font-bold tracking-tight capitalize lg:text-6xl">
          {heading}
        </h1>
        <p className="text-muted-foreground text-center leading-relaxed lg:px-22 lg:text-lg">
          {describe}
        </p>
      </div>
      <div className="mt-10 flex flex-col justify-center-safe space-y-4 lg:flex-row lg:items-center-safe lg:gap-3 lg:space-y-0">
        {cta.map((item, index) => (
          <Button key={index} asChild size="lg" variant={item.variant}>
            <Link href={item.href}>
              <p>{item.label}</p>
              <LucideIcon icon={item.icon} />
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
