import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SharedLayoutProps } from "@/types/layout";
import Link from "next/link";

export default function AuthLayout({ children }: SharedLayoutProps) {
  return (
    <section className="flex h-screen flex-col items-center-safe justify-center-safe space-y-8">
      <div className="flex w-full justify-end-safe px-4 lg:px-0 lg:w-sm lg:justify-start">
        <Button
          asChild
          size="lg"
          variant="ghost"
          className="text-primary lg:text-foreground hover:text-primary h-0 rounded-none p-0"
        >
          <Link href="/">Kembali</Link>
        </Button>
      </div>
      <Card className="bg-background-light rounded-xl ring-0">{children}</Card>
    </section>
  );
}
