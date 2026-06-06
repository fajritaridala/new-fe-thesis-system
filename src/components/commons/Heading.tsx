type PropTypes = {
  title: string;
  heading: string;
  describe: string;
};

export default function Heading(props: PropTypes) {
  const { title, heading, describe } = props;

  return (
    <div className="space-y-4">
      <h1 className="text-primary capitalize">{title}</h1>
      <h2 className="font-sora text-3xl leading-tight font-bold tracking-tight capitalize lg:px-52 lg:text-4xl">
        {heading}
      </h2>
      <p className="text-muted-foreground text-justify leading-relaxed lg:px-46 lg:text-center">
        {describe}
      </p>
    </div>
  );
}
