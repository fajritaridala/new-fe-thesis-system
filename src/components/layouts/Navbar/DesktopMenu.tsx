import { Button } from "@/components/ui/button";
import GLOBAL_CONTENT from "@/data/contents/global";
import Link from "next/link";

export default function DesktopMenu() {
  const { links, login } = GLOBAL_CONTENT.navbar;

  return (
    <div className="flex items-center-safe gap-10">
      <ul className="flex gap-10">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        asChild
        aria-label={login.aria_label}
        size="lg"
        className="lg:h-12"
      >
        <Link href={login.href}>
          <p className="text-background">{login.label}</p>
        </Link>
      </Button>
    </div>
  );
}
