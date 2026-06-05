import { Inter, Sora } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const soraFont = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export { interFont, soraFont };
