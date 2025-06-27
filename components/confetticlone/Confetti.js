import React, { useEffect, useRef } from "react";
import Confetti from "react-confetti";

const Confetti = () => {
  const confettiRef = useRef(null);

  useEffect(() => {
    // Check if it's the first visit using localStorage (or a similar mechanism)
    const isFirstVisit = localStorage.getItem("isFirstVisit") === null;

    if (isFirstVisit) {
      confettiRef.current.start();
      localStorage.setItem("isFirstVisit", "false"); // Mark as visited
    }

    // Optional: Cleanup function to stop confetti on unmount
    return () => confettiRef.current.reset();
  }, []);

  return <Confetti ref={confettiRef} recycle={false} />;
};

export default Confetti;
