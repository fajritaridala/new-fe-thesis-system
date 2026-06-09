import ServiceContainer from "@/features/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sipena - Layanan",
};

export default function ServicePage() {
  return (
    <>
      <ServiceContainer />
    </>
  );
}
