import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { SharedLayoutProps } from "@/types/layout";

export default function MainLayout({ children }: SharedLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="bg-background px-4 lg:px-18">{children}</main>
      <Footer />
    </>
  );
}
