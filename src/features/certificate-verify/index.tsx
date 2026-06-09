import { HeroHeading } from "@/components/shared/heading";
import { VERIFY_CONTENT } from "@/data/contents/main/verify-content";
import VerifyCard from "./_component/verify-card";

export default function VerifyContainer() {
  const { title, heading, description } = VERIFY_CONTENT;

  return (
    <div className="space-y-6 pt-24 lg:space-y-12 lg:pt-28">
      <HeroHeading title={title} headline={heading} description={description} />
      <VerifyCard />
    </div>
  );
}
