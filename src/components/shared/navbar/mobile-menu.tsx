"use client";

import LucideIcon from "@/components/shared/lucide-icon-render";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { NavbarProps } from ".";

export default function MobileMenu({ data }: NavbarProps) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <>
      <button onClick={handleOpenMenu}>
        <LucideIcon icon={data.icon} size={22} className="hover:text-primary" />
      </button>

      <div
        className={cn(
          "bg-background transition-transformj absolute inset-0 flex h-dvh w-full -translate-x-full flex-col justify-between px-2 py-6 delay-100 duration-300 ease-in-out",
          { "translate-x-0": isOpenMenu },
        )}
      >
        <div className="">
          <div className="border-border flex justify-between border-b px-4 pb-6">
            <h2 className="text-muted-foreground uppercase">
              {data.labels.heading}
            </h2>
            <button onClick={handleOpenMenu}>
              <p className="hover:text-primary text-sm">{data.labels.back}</p>
            </button>
          </div>
          <ul>
            {data.links.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={handleOpenMenu}
                  href={link.href}
                  className="hover:bg-muted group border-border flex items-center-safe gap-6 border-b px-6 py-4 transition-all delay-75 duration-200"
                >
                  <LucideIcon
                    icon={link.icon}
                    size={18}
                    className="text-foreground group-hover:text-primary delay-75 duration-200"
                  />
                  <p className="group-hover:text-primary text-foreground delay-75 duration-200">
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full px-4">
          <Button
            onClick={handleOpenMenu}
            asChild
            aria-label={data.login.aria_label}
            size="lg"
            className="w-full"
          >
            <Link href={data.login.href}>{data.login.label}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
