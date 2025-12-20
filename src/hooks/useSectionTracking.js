import { useEffect, useRef } from "react";
import { useVisitor } from "../context/VisitorContext";

/**
 * 📍 SECTION TRACKING HOOK
 *
 * Automatically tracks when sections come into view
 * Uses Intersection Observer for performance
 */

const useSectionTracking = (sectionName, ref) => {
  const { trackSection, trackScroll } = useVisitor();
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSection(sectionName);
            hasTracked.current = true;
            console.log(`📍 Section viewed: ${sectionName}`);
          }
        });
      },
      {
        threshold: 0.3, // 30% visible
        rootMargin: "0px",
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, ref, trackSection]);

  // Also track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = Math.round((window.scrollY / scrollHeight) * 100);
      trackScroll(scrollDepth);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackScroll]);
};

export default useSectionTracking;
