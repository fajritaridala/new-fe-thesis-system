import LucideIcon from "./lucide-icon";
import Link from "next/link";
import SHARED_CONTENT from "@/data/contents/shared-content";

export default function Footer() {
  const { about, contact, copyright, links } = SHARED_CONTENT.footer;

  return (
    <footer className="bg-background-light mt-12 space-y-8 px-4 py-8 lg:mt-16 lg:space-y-12 lg:px-16 lg:py-14">
      <div className="grid-cols-4 space-y-8 lg:grid">
        <div className="space-y-2 lg:col-span-2">
          <h1 className="font-sora text-lg font-medium">{about.title}</h1>
          <p className="text-muted-foreground">{about.description}</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-sora font-bold">{links.title}</h1>
          <ul className="space-y-1">
            {links.links.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="font-sora font-bold">{contact.title}</h1>
          <ul className="space-y-1">
            {contact.socials.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:text-primary flex items-center-safe gap-2"
                >
                  <LucideIcon icon={item.icon} className="size-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-border flex flex-col gap-1 border-t pt-4 text-center text-sm">
        <span className="text-muted-foreground">{copyright.title}</span>
        <ul className="flex justify-center-safe gap-4">
          {copyright.links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
