"use client";

import LucideIcon from "@/components/Icon";
import GLOBAL_CONTENT from "@/data/contents/global";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const { icon, labels, links } = GLOBAL_CONTENT.navbar;
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <>
      <button onClick={handleOpenMenu}>
        <LucideIcon icon={icon} size={22} className="hover:text-primary" />
      </button>

      <div
        className={cn(
          "bg-background absolute inset-0 h-dvh w-full -translate-x-full px-2 transition-transform delay-100 duration-300 ease-in-out",
          { "translate-x-0": isOpenMenu },
        )}
      >
        <div className="border-border flex justify-between border-b px-4 py-6">
          <h2 className="text-muted-foreground uppercase">{labels.heading}</h2>
          <button onClick={handleOpenMenu}>
            <p className="hover:text-primary text-sm">{labels.back}</p>
          </button>
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link
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
    </>
  );
}
