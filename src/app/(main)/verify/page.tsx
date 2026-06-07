import { Metadata } from "next";
import VerifyCard from "./_components/VerifyCard";
import { HeroHeading } from "@/components/common/Heading";
import { VERIFY_CONTENT } from "@/data/contents/main/verify";

export const metadata: Metadata = {
  title: "Sipena - Verifikasi Sertifikat",
};

export default function VerifyPage() {
  const { title, heading, description } = VERIFY_CONTENT;

  return (
    <div className="space-y-6 pt-24 lg:space-y-12 lg:pt-28">
      <HeroHeading title={title} headline={heading} description={description} />
      <VerifyCard />
    </div>
  );
}
