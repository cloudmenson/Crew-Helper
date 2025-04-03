import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

export const useSmoothScroll = () =>
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // чим більше — тим плавніше
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
