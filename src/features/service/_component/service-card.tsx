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
    <Card className="bg-background-light justify-between ring-0">
      <CardHeader>
        <CardTitle className="py-4">
          <div className="flex items-center-safe justify-between">
            <span className="font-sora text-primary text-xl font-bold lg:text-2xl">
              {title}
            </span>
            <span className="text-foreground font-medium">Rp {price}</span>
          </div>
        </CardTitle>
        <CardDescription>
          <p className="text-justify">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="pb-2 lg:pb-3">
        <Button asChild size="lg" className="w-full">
          <Link href="/service/schedule">Daftar Sekarang</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
