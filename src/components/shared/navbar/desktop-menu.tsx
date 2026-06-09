import LucideIcon from "@/components/shared/lucide-icon-render";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavbarProps } from ".";

export default function DesktopMenu({ data }: NavbarProps) {
  return (
    <div className="flex items-center-safe gap-10">
      <ul className="flex gap-10">
        {data.links.map((link, index) => (
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
        aria-label={data.login.aria_label}
        size="lg"
        className="lg:h-12"
      >
        <Link href={data.login.href}>
          <span className="text-background">{data.login.label}</span>
          <LucideIcon icon={data.login.icon} className="size-5" />
        </Link>
      </Button>
    </div>
  );
}
