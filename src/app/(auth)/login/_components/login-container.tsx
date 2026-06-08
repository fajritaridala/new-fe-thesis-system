import LucideIcon from "@/components/shared/lucide-icon";
import { Button } from "@/components/ui/button";
import {
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AUTH_CONTENT } from "@/data/contents/auth-content";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sipena - Login",
};

export default function LoginContainer() {
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
            <Link href={cta.href}>
              <span>{cta.label}</span>
              <LucideIcon icon={cta.icon} className="size-5" />
            </Link>
          </Button>
        </CardAction>
        <CardDescription>
          <span>{footer}</span>
        </CardDescription>
      </CardFooter>
    </>
  );
}
