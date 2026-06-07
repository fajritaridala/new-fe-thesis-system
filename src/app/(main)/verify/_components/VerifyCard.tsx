import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VERIFY_CONTENT } from "@/data/contents/verify";
import Link from "next/link";

export default function VerifyCard() {
  const { heading, format, cta_verify } = VERIFY_CONTENT.card;

  return (
    <Card className="mx-auto rounded-xl px-6 ring-0 lg:w-xl">
      <CardHeader className="bg-muted flex h-44 flex-col items-center-safe justify-center-safe rounded-lg text-center lg:h-72">
        <CardTitle className="text-sm">{heading}</CardTitle>
        <CardDescription>{format}</CardDescription>
      </CardHeader>
      <CardFooter className="rounded-none px-0">
        <CardAction className="w-full">
          <Button asChild size="lg" className="w-full">
            <Link href={cta_verify.href}>{cta_verify.label}</Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
