import { HeroHeading } from "@/components/shared/heading";
import VerifyCard from "./verify-card";
import { VERIFY_CONTENT } from "@/data/contents/main/verify-content";

export default function VerifyContainer() {
  const { title, heading, description } = VERIFY_CONTENT;

  return (
    <div className="space-y-6 pt-24 lg:space-y-12 lg:pt-28">
      <HeroHeading title={title} headline={heading} description={description} />
      <VerifyCard />
    </div>
  );
}
