import LucideIcon from "@/components/shared/lucide-icon-render";
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
import { HOME_CONTENT } from "@/data/contents/main/home-content";
import Link from "next/link";

export interface ActionSectionProps {
  data: typeof HOME_CONTENT.action;
}

export default function Action({ data }: ActionSectionProps) {
  return (
    <section id="action">
      <Card className="bg-primary space-y-4 lg:space-y-8 lg:px-6 lg:py-16">
        <CardHeader className="space-y-4">
          <Badge
            variant="secondary"
            className="bg-primary-foreground text-foreground h-6 px-4 capitalize"
          >
            {data.tag}
          </Badge>
          <CardTitle className="font-sora text-primary-foreground text-3xl font-bold lg:text-5xl">
            {data.headline}
          </CardTitle>
          <CardDescription className="text-muted text-base">
            {data.describe}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <CardAction className="flex w-full justify-center-safe">
            <Button
              asChild
              size="lg"
              className="bg-background hover:bg-background/90 text-foreground w-full lg:w-fit"
            >
              <Link href={data.cta.href}>
                <span>{data.cta.label}</span>
                <LucideIcon icon={data.cta.icon} className="size-5" />
              </Link>
            </Button>
          </CardAction>
        </CardFooter>
      </Card>
    </section>
  );
}
