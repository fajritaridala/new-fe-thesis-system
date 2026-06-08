import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <Card className="bg-background-light justify-between">
      <CardHeader>
        <CardTitle className="py-4">
          <div className="flex items-center-safe justify-between">
            <span className="font-sora text-primary text-2xl font-bold">
              {title}
            </span>
            <span className="text-foreground text-lg font-semibold">
              Rp {price}
            </span>
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pb-2 lg:pb-3">
        <Button asChild size="lg" className="w-full">
          <Link href="#">Daftar Sekarang</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
