import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { SharedLayoutProps } from "../layout";

export default function MainLayout({ children }: SharedLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="bg-background px-4 lg:px-18">{children}</main>
      <Footer />
    </>
  );
}
