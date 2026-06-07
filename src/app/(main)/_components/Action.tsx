import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HOME_CONTENT } from "@/data/contents/main/home";
import Link from "next/link";

export default function Action() {
  const { tag, cta, describe, headline } = HOME_CONTENT.action;

  return (
    <section>
      <Card className="bg-primary space-y-4 lg:space-y-8 lg:px-6 lg:py-16">
        <CardHeader className="space-y-4">
          <Badge
            variant="secondary"
            className="bg-primary-foreground text-foreground h-6 px-4 capitalize"
          >
            {tag}
          </Badge>
          <CardTitle className="font-sora text-primary-foreground text-3xl font-bold lg:text-5xl">
            {headline}
          </CardTitle>
          <CardDescription className="text-muted text-base">
            {describe}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <CardAction className="flex w-full justify-center-safe">
            <Button
              asChild
              size="lg"
              className="bg-background hover:bg-background/90 text-foreground w-full lg:w-fit"
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </CardAction>
        </CardFooter>
      </Card>
    </section>
  );
}
