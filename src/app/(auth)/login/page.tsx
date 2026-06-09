import LoginContainer from "@/features/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sipena - Masuk sistem",
};

export default function LoginPage() {
  return (
    <>
      <LoginContainer />
    </>
  );
}
