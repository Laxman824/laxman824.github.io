import { useCallback, useRef, useEffect } from "react";
import { useVisitor } from "../context/VisitorContext";

/**
 * 🖱️ HOVER TRACKING HOOK
 *
 * Tracks how long users hover over elements
 * to understand their interests
 */

const useHoverTracking = (elementId, options = {}) => {
  const {
    minDuration = 500, // Minimum hover time to track (ms)
    significantDuration = 3000, // Duration that indicates strong interest
    onSignificantHover = null, // Callback for significant hover
  } = options;

  const { trackHover } = useVisitor();
  const hoverStartTime = useRef(null);
  const totalHoverTime = useRef(0);
  const hoverCount = useRef(0);

  const handleMouseEnter = useCallback(() => {
    hoverStartTime.current = Date.now();
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverStartTime.current) {
      const duration = Date.now() - hoverStartTime.current;

      if (duration >= minDuration) {
        hoverCount.current++;
        totalHoverTime.current += duration;

        // Track with visitor intelligence
        trackHover(elementId, duration);

        // Check for significant hover
        if (duration >= significantDuration && onSignificantHover) {
          onSignificantHover({
            elementId,
            duration,
            totalTime: totalHoverTime.current,
            hoverCount: hoverCount.current,
          });
        }

        console.log(`👁️ Hover tracked: ${elementId} for ${duration}ms`);
      }

      hoverStartTime.current = null;
    }
  }, [
    elementId,
    minDuration,
    significantDuration,
    trackHover,
    onSignificantHover,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // If still hovering when component unmounts, track it
      if (hoverStartTime.current) {
        const duration = Date.now() - hoverStartTime.current;
        if (duration >= minDuration) {
          trackHover(elementId, duration);
        }
      }
    };
  }, [elementId, minDuration, trackHover]);

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    hoverCount: hoverCount.current,
    totalHoverTime: totalHoverTime.current,
  };
};

// Higher-order component for easy wrapping
export const withHoverTracking = (
  WrappedComponent,
  elementId,
  options = {}
) => {
  return function HoverTrackedComponent(props) {
    const hoverProps = useHoverTracking(elementId, options);

    return (
      <div {...hoverProps}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default useHoverTracking;
