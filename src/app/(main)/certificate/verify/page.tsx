import VerifyContainer from "@/features/certificate-verify";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sipena - Verifikasi Sertifikat",
};

export default function VerifyPage() {
  return (
    <>
      <VerifyContainer />
    </>
  );
}
