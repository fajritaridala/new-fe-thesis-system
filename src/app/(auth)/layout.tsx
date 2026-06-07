import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SharedLayoutProps } from "@/types/layout";
import Link from "next/link";

export default function AuthLayout({ children }: SharedLayoutProps) {
  return (
    <section className="flex h-dvh flex-col items-center-safe justify-center-safe space-y-8 px-4">
      <div className="flex w-sm justify-end-safe lg:w-md lg:justify-start lg:px-0">
        <Button
          asChild
          size="lg"
          variant="none"
          className="text-primary hover:text-primary lg:text-foreground h-4 border-0 p-0 lg:h-8"
        >
          <Link href="/">Kembali</Link>
        </Button>
      </div>
      <Card className="bg-background-light w-sm ring-0 lg:w-md lg:py-8">
        {children}
      </Card>
    </section>
  );
}
