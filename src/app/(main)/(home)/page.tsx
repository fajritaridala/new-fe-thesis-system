import { Metadata } from "next";
import HomeContainer from "./_components/home-container";

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
