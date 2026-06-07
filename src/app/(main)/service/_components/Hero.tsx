import { SERVICE_CONTENT } from "@/data/contents/service";
import ServiceSkeleton from "./ServiceSkeleton";

export default function HeroService() {
  const { heading, description, title } = SERVICE_CONTENT;

  return (
    <section className="space-y-6 lg:space-y-12">
      <div className="space-y-4 pt-24 text-center lg:space-y-8 lg:pt-28">
        <h1 className="text-primary">{title}</h1>
        <h2 className="font-sora text-3xl font-bold lg:px-56 lg:text-4xl">
          {heading}
        </h2>
        <p className="text-muted-foreground lg:px-56">{description}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <ServiceSkeleton />
        <ServiceSkeleton />
        <ServiceSkeleton />
      </div>
    </section>
  );
}
