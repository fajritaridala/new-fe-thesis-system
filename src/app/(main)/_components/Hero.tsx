import { HeroHeading } from "@/components/common/Heading";
import LucideIcon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { HOME_CONTENT } from "@/data/contents/main/home";
import Link from "next/link";

export default function Hero() {
  const { title, headline, description, cta } = HOME_CONTENT.hero;

  return (
    <section className="space-y-8 pt-24 lg:space-y-12 lg:pt-28">
      <HeroHeading
        title={title}
        headline={headline}
        description={description}
      />
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
