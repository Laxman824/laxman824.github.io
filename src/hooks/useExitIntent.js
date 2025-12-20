import { useState, useEffect, useCallback, useRef } from "react";
import { useVisitor } from "../context/VisitorContext";

/**
 * 🚪 EXIT INTENT HOOK - FIXED
 */

const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const useExitIntent = (options = {}) => {
  const {
    threshold = 50,
    delay = 5000,
    cooldown = 30000,
    enabled = true,
  } = options;

  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  // ✅ FIX: Safe destructuring with fallback
  const visitor = useVisitor();
  const checkExitIntent =
    typeof visitor?.checkExitIntent === "function"
      ? visitor.checkExitIntent
      : () => false;

  const lastTriggerTime = useRef(0);
  const pageLoadTime = useRef(Date.now());
  const listenersAttached = useRef(false);

  const shouldTrigger = useCallback(() => {
    if (!enabled) return false;

    const now = Date.now();
    if (now - lastTriggerTime.current < cooldown) return false;
    if (now - pageLoadTime.current < delay) return false;
    if (sessionStorage.getItem("exit_intent_shown")) return false;

    // ✅ FIX: Safe function call
    try {
      return checkExitIntent();
    } catch (e) {
      console.warn("checkExitIntent error:", e);
      return false;
    }
  }, [cooldown, delay, checkExitIntent, enabled]);

  const triggerExitIntent = useCallback(() => {
    if (hasTriggered) return;

    if (shouldTrigger()) {
      setShowExitIntent(true);
      setHasTriggered(true);
      lastTriggerTime.current = Date.now();
      sessionStorage.setItem("exit_intent_shown", "true");
    }
  }, [hasTriggered, shouldTrigger]);

  useEffect(() => {
    if (!enabled || listenersAttached.current) return;

    listenersAttached.current = true;

    const handleMouseLeave = (e) => {
      if (e.clientY <= threshold && e.relatedTarget === null) {
        triggerExitIntent();
      }
    };

    const handleScroll = throttle(() => {
      // Simplified scroll check
    }, 500);

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        triggerExitIntent();
      }
    };

    // ✅ FIX: Removed popstate listener that was causing issues
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
      listenersAttached.current = false;
    };
  }, [enabled, threshold, triggerExitIntent]);

  const dismissExitIntent = useCallback(() => {
    setShowExitIntent(false);
  }, []);

  const resetExitIntent = useCallback(() => {
    setHasTriggered(false);
    setShowExitIntent(false);
    sessionStorage.removeItem("exit_intent_shown");
    lastTriggerTime.current = 0;
  }, []);

  return {
    showExitIntent,
    hasTriggered,
    dismissExitIntent,
    resetExitIntent,
    triggerExitIntent,
  };
};

export default useExitIntent;
