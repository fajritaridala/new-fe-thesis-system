import { HeroHeading } from "@/components/shared/heading";
import LucideIcon from "@/components/shared/lucide-icon-render";
import { Button } from "@/components/ui/button";
import { HOME_CONTENT } from "@/data/contents/main/home-content";
import Link from "next/link";

interface HeroSectionProps {
  data: typeof HOME_CONTENT.hero;
}

export default function Hero({ data }: HeroSectionProps) {
  return (
    <section id="hero" className="space-y-8 pt-24 lg:space-y-12 lg:pt-28">
      <HeroHeading
        title={data.title}
        headline={data.headline}
        description={data.description}
      />
      <div className="flex flex-col justify-center-safe gap-2 lg:flex-row lg:gap-4">
        {data.cta.map(({ variant, href, label, icon }, index) => (
          <Button key={index} asChild size="lg" variant={variant}>
            <Link href={href}>
              <p>{label}</p>
              <LucideIcon icon={icon} className="size-5" />
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
