import GLOBAL_CONTENT from "@/data/contents/global";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  const { navbar } = GLOBAL_CONTENT;

  return (
    <nav className="bg-background border-border fixed z-30 flex w-full items-center-safe justify-between border-b p-4 lg:px-8 lg:py-2">
      <h1 className="text-foreground font-sora tracking-tight lg:text-lg">
        {navbar.title}
      </h1>
      <div className="lg:hidden">
        <MobileMenu />
      </div>
      <div className="hidden lg:block">
        <DesktopMenu />
      </div>
    </nav>
  );
}
