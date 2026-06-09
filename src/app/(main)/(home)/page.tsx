import HomeContainer from "@/features/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sipena - Beranda",
};

export default function HomePage() {
  return (
    <>
      <HomeContainer />
    </>
  );
}
