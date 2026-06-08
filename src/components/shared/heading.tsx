type HeadingProps = {
  title: string;
  headline: string;
  description: string;
};

function Heading({ title, headline, description }: HeadingProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-primary capitalize">{title}</h1>
      <h2 className="font-sora text-3xl leading-tight font-bold tracking-tight capitalize lg:px-52 lg:text-4xl">
        {headline}
      </h2>
      <p className="text-muted-foreground text-justify leading-relaxed lg:px-46 lg:text-center">
        {description}
      </p>
    </div>
  );
}

function HeroHeading({ title, headline, description }: HeadingProps) {
  return (
    <div className="mx-auto space-y-4 text-center lg:w-5xl lg:space-y-8">
      <h1 className="text-primary capitalize">{title}</h1>
      <h2 className="font-sora text-4xl leading-11 font-bold tracking-tight capitalize lg:text-6xl lg:leading-16">
        {headline}
      </h2>
      <p className="text-muted-foreground leading-relaxed lg:mx-auto lg:w-3xl">
        {description}
      </p>
    </div>
  );
}

export { Heading, HeroHeading };
