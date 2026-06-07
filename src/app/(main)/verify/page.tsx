import { Metadata } from "next";
import HeroVerify from "./_components/Hero";
import VerifyCard from "./_components/VerifyCard";

export const metadata: Metadata = {
  title: "Sipena - Verifikasi Sertifikat",
};

export default function VerifyPage() {
  return (
    <div className="space-y-6 lg:space-y-12">
      <HeroVerify />
      <VerifyCard />
    </div>
  );
}
