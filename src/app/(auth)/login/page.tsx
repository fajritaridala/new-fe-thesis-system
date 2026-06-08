import { Metadata } from "next";
import LoginContainer from "./_components/login-container";

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
