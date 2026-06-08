import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AUTH_CONTENT } from "@/data/contents/auth-content";
import RegisterForm from "./register-form";
import { Button } from "@/components/ui/button";

export default function RegisterContainer() {
  const { title, description, cta, forms } = AUTH_CONTENT.register;

  return (
    <>
      <CardHeader>
        <CardTitle>
          <span className="font-sora text-primary text-2xl capitalize lg:text-3xl">
            {title}
          </span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm data={forms} />
      </CardContent>
      <CardFooter>
        <Button
          aria-label={cta.ariaLabel}
          size="lg"
          type="submit"
          form="metamask-register-form"
          className="w-full"
        >
          {cta.label}
        </Button>
      </CardFooter>
    </>
  );
}
