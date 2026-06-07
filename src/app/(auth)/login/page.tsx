import { Button } from "@/components/ui/button";
import {
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AUTH_CONTENT } from "@/data/contents/auth";
import Link from "next/link";

export default function LoginPage() {
  const { title, description, cta, footer } = AUTH_CONTENT.login;

  return (
    <>
      <CardHeader className="lg:text-center">
        <CardTitle className="font-sora text-primary text-2xl lg:text-3xl">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-4">
        <CardAction className="w-full">
          <Button asChild size="lg" className="w-full">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </CardAction>
        <CardDescription>{footer.label}</CardDescription>
      </CardFooter>
    </>
  );
}
