import { Metadata } from "next";
import RegisterContainer from "./_components/register-container";

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
