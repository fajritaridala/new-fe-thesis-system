import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  House,
  Layers,
  ShieldCheck,
  Menu,
  LogIn,
  FingerprintPattern,
  Zap,
  ScanQrCode,
  Mail,
  MapPin,
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
  Menu,
  ArrowUpRight,
  ArrowLeft,
  LogIn,
  FingerprintPattern,
  Zap,
  ScanQrCode,
  Mail,
  MapPin,
};

export default function LucideIcon(props: PropTypes) {
  const Icon = IconMap[props.icon];
  if (!Icon) return null;

  return <Icon {...props} />;
}
