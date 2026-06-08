import { SERVICE_CONTENT } from "@/data/contents/main/service-content";
import ServiceSkeleton from "./service-skeleton";
import { HeroHeading } from "@/components/shared/heading";
import ServiceCard from "./service-card";

export default function ServiceContainer() {
  const { title, heading, description, dummy } = SERVICE_CONTENT;

  return (
    <div className="space-y-8 pt-24 lg:space-y-24 lg:pt-28">
      <HeroHeading title={title} headline={heading} description={description} />
      <div className="grid grid-cols-1 gap-6 px-6 lg:grid-cols-3 lg:gap-10 lg:px-12">
        {dummy ? (
          <>
            {dummy.map((data, index) => (
              <ServiceCard
                key={index}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </>
        ) : (
          <>
            <ServiceSkeleton />
            <ServiceSkeleton />
            <ServiceSkeleton />
          </>
        )}
      </div>
    </div>
  );
}
