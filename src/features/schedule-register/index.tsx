import { Button } from "@/components/ui/button";
import LucideIcon from "@/components/shared/lucide-icon-render";
import Link from "next/link";
import ScheduleRegisterForm from "./_component/register-form";

export default function ScheduleRegisterContainer() {
  return (
    <section className="space-y-6 pt-24">
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
      <div className="mx-auto lg:w-xl">
        <ScheduleRegisterForm />
      </div>
    </section>
  );
}
