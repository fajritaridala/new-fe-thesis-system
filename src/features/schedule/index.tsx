import LucideIcon from "@/components/shared/lucide-icon-render";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScheduleCalendar from "./_component/schedule-calendar";

export default function ScheduleContainer() {
  return (
    <section className="items-center-safe space-y-6 pt-24">
      <Button
        asChild
        variant="none"
        size="lg"
        className="text-primary hover:text-primary lg:text-foreground h-4 border-0 p-0 lg:h-8"
      >
        <Link href="/service">
          <LucideIcon icon="ArrowLeft" className="size-5" />
          <span>Kembali</span>
        </Link>
      </Button>
      <div className="mx-auto lg:w-4xl">
        <ScheduleCalendar />
      </div>
    </section>
  );
}
