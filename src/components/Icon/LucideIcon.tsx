import {
  ArrowRight,
  House,
  Layers,
  ShieldCheck,
  Lock,
  FingerprintPattern,
  Globe,
  Menu,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon, LucideProps } from "lucide-react";

type PropTypes = {
  icon: string;
} & LucideProps;

const IconMap: Record<string, LucideIcon> = {
  ArrowRight,
  House,
  Layers,
  ShieldCheck,
  Lock,
  FingerprintPattern,
  Globe,
  Menu,
  ChevronRight,
};

export default function LucideIcon(props: PropTypes) {
  const Icon = IconMap[props.icon];
  if (!Icon) return null;

  return <Icon {...props} />;
}
