import { Metadata } from "next";
import ServiceSkeleton from "./_components/ServiceSkeleton";
import { HeroHeading } from "@/components/common/Heading";
import { SERVICE_CONTENT } from "@/data/contents/main/service";

export const metadata: Metadata = {
  title: "Sipena - Layanan",
};

export default function ServicePage() {
  const { title, heading, description } = SERVICE_CONTENT;

  return (
    <div className="space-y-6 pt-24 lg:space-y-12 lg:pt-28">
      <HeroHeading title={title} headline={heading} description={description} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <ServiceSkeleton />
        <ServiceSkeleton />
        <ServiceSkeleton />
      </div>
    </div>
  );
}
