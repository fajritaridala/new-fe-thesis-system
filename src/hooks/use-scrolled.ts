import { useEffect, useState } from "react";

export default function useScrolled(threshold: number = 0) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  };

  useEffect(handleScroll, [threshold]);

  return { isScrolled };
}
