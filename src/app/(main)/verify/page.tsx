import { Metadata } from "next";
import VerifyContainer from "./_components/verify-container";

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
