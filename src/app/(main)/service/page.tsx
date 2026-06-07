import { Metadata } from "next";
import HeroService from "./_components/Hero";
import ServiceSkeleton from "./_components/ServiceSkeleton";

export const metadata: Metadata = {
  title: "Sipena - Layanan",
};

export default function ServicePage() {
  return (
    <div className="space-y-6 lg:space-y-12">
      <HeroService />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <ServiceSkeleton />
        <ServiceSkeleton />
        <ServiceSkeleton />
      </div>
    </div>
  );
}
