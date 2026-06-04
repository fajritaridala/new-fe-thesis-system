import DEFAULT_CONTENT from "@/data/contents/defaultContent";
import LucideIcon from "@/components/Icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - TOEFL Verification",
};

export default function Home() {
  const { hero_section, why_section, how_section, testimonial_section } =
    DEFAULT_CONTENT.home;

  return (
    <>
      {/* hero-start */}
      <section className="z-0 flex h-dvh lg:h-screen">
        <div className="flex w-full flex-col justify-center-safe">
          <h1 className="text-foreground mb-6 text-6xl leading-tight font-extrabold tracking-tighter capitalize">
            {hero_section.heading}
          </h1>
          <p className="text-foreground-body mb-8 text-justify text-sm leading-relaxed tracking-wide">
            {hero_section.sub}
          </p>
          <div className="flex">
            <Button asChild className="h-12 rounded-lg px-8">
              <Link href={hero_section.button.to}>
                <p className="w-full capitalize">{hero_section.button.cta}</p>
                <LucideIcon icon={hero_section.button.icon} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* hero-end */}

      {/* why-start */}
      <section>
        <div className="flex flex-col space-y-4">
          <h1 className="text-foreground text-2xl font-bold tracking-tight capitalize">
            {why_section.heading}
          </h1>
          <p className="text-foreground-body text-justify text-sm leading-relaxed">
            {why_section.sub}
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {why_section.card.map((item, index) => (
            <Card
              key={index}
              className="rounded-xl text-center shadow-none transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex justify-center-safe">
                  <div className="bg-bg-secondary ring-accent rounded-full p-2 shadow-lg ring-2">
                    <LucideIcon
                      icon={item.icon}
                      className="text-foreground-light"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h2 className="text-xl font-bold capitalize">
                  {item.headline}
                </h2>
              </CardContent>
              <CardFooter>
                <p className="text-foreground-body text-sm leading-relaxed">
                  {item.describe}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      {/* why-end */}

      {/* how-start */}
      <section>
        <div className="mt-10 space-y-4">
          <h1 className="text-foreground text-2xl leading-tight font-bold tracking-tight capitalize">
            {how_section.heading}
          </h1>
          <p className="text-foreground-body text-justify text-sm leading-relaxed">
            {how_section.sub}
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {how_section.card.map((item, index) => (
            <Card
              key={index}
              className="rounded-xl text-center shadow-none transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center-safe gap-6">
                  <div className="bg-bg-accent flex size-12 items-center justify-center rounded-full p-3">
                    <p className="text-foreground-light text-xl font-bold">
                      0{index + 1}
                    </p>
                  </div>
                  <h2 className="text-foreground text-xl font-bold tracking-tight">
                    {item.headline}
                  </h2>
                </div>
              </CardHeader>
              <CardFooter>
                <p className="text-foreground-body text-center text-sm">
                  {item.describe}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      {/* how-end */}

      {/* testimonial-start */}
      <section>
        <div className="mt-10 space-y-4">
          <h1 className="text-foreground text-2xl leading-tight font-bold tracking-tight capitalize">
            {testimonial_section.heading}
          </h1>
          <p className="text-foreground-body text-justify text-sm leading-relaxed">
            {testimonial_section.sub}
          </p>
        </div>
        <div className="">
          {testimonial_section.card.map((item, index) => (
            <Card key={index} className="rounded-xl">
              <CardHeader>
                <h2>{item.name}</h2>
                <h3>{item.job}</h3>
              </CardHeader>
              <CardContent>
                <p>{item.describe}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* testimonial-end */}
    </>
  );
}
