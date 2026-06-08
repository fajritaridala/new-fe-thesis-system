import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type PropTypes = ComponentProps<"div"> & {
  items: readonly {
    readonly title: string;
    readonly description: string;
  }[];
};

export default function Timeline(props: PropTypes) {
  const { items, className } = props;
  return (
    <div className={cn("mx-auto max-w-(--breakpoint-sm)", className)}>
      <div className="relative ml-6">
        {/* Timeline line */}
        <div className="border-border absolute inset-y-0 left-0 border-l-2" />

        {items.map(({ title, description }, index) => (
          <div key={index} className="relative pb-10 pl-10 last:pb-0">
            {/* Timeline Icon */}
            <div className="border-muted-foreground/40 bg-primary ring-background absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full ring-8">
              <span className="text-primary-foreground font-sora text-lg font-semibold">
                {index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-2 pt-1">
              <h3 className="font-sora text-xl font-medium tracking-[-0.015em]">
                {title}
              </h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
