import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";
import SHARED_CONTENT from "@/data/contents/shared-content";

export interface NavbarProps {
  data: typeof SHARED_CONTENT.navbar;
}

export default function Navbar() {
  const { navbar } = SHARED_CONTENT;

  return (
    <nav className="bg-background-light border-border fixed z-30 flex w-full items-center-safe justify-between border-b p-4 lg:px-16 lg:py-2">
      <h1 className="text-foreground font-sora font-medium tracking-tight lg:text-lg">
        {navbar.title}
      </h1>
      <div className="lg:hidden">
        <MobileMenu data={navbar} />
      </div>
      <div className="hidden lg:block">
        <DesktopMenu data={navbar} />
      </div>
    </nav>
  );
}
