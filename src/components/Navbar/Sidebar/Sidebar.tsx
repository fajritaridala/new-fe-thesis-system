import GLOBAL_CONTENT from "@/data/contents/globalContent";
import LucideIcon from "@/components/Icon/LucideIcon";
import Link from "next/link";

export default function Sidebar(props: { isOpen: boolean }) {
  const { isOpen } = props;

  const content = GLOBAL_CONTENT.navbar.sidebar;

  return (
    <div
      className={`bg-bg-secondary border-bdr-accent w- h-full space-y-6 border-l-4 p-8 transition-transform duration-300 ease-in-out ${isOpen ? "translate-0" : "translate-x-full"}`}
    >
      <h2 className="text-foreground-accent px-2 text-lg font-bold">
        {content.heading}
      </h2>
      <ul>
        {content.links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                key={index}
                href={item.link}
                className="text-foreground-light active:bg-bg-secondary flex items-center-safe gap-4 rounded-xl p-4 transition-colors duration-200 ease-in-out"
              >
                <LucideIcon icon={item.icon} className="size-4" />
                <p className="text-lg font-semibold">{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
