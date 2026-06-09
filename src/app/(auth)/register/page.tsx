import RegisterContainer from "@/features/auth/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sipena - Daftar akun",
};

export default function RegisterPage() {
  return (
    <>
      <RegisterContainer />
    </>
  );
}
