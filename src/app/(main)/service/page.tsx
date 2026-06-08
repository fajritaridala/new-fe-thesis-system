import { Metadata } from "next";
import ServiceContainer from "./_components/service-container";

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
