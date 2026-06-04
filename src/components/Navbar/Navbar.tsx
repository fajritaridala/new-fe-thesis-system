"use client";

import GLOBAL_CONTENT from "@/data/contents/globalContent";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      return window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = GLOBAL_CONTENT.navbar;

  return (
    <nav
      className={`fixed z-10 flex h-16 w-full items-center-safe ${isScrolled && "shadow-sm backdrop-blur-xl"}`}
    >
      <div className="flex w-full items-center-safe justify-between px-6 lg:px-18">
        <h1 className="text-foreground-accent text-2xl font-bold lg:text-xl">
          {content.title}
        </h1>

        {/* mobile-menu-start */}
        <button
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="border-bdr-accent bg-bg-primary rounded-lg border-2 p-2 shadow-md transition-all duration-100 ease-in-out active:translate-y-1 active:shadow-none lg:hidden"
        >
          <Menu className="text-foreground-accent" />
        </button>
        <div
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={`absolute inset-0 z-30 flex h-dvh w-full justify-end-safe backdrop-blur-lg transition-opacity duration-500 ease-in-out ${isOpenMenu ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <Sidebar isOpen={isOpenMenu} />
        </div>
        {/* mobile-menu-end */}

        {/* desktop-menu-start */}
        <div className="hidden items-center-safe gap-12 lg:flex">
          <ul className="flex gap-8">
            {content.sidebar.links.map((item, index) => (
              <li key={index}>
                <Link
                  key={index}
                  href={item.link}
                  className="text-foreground-muted hover:text-foreground text-base font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" aria-label={content.cta.aria_label} className="rounded-lg">
            <Link href="#">{content.cta.label}</Link>
          </Button>
        </div>
        {/* desktop-menu-end */}
      </div>
    </nav>
  );
}
