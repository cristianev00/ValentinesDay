"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!showConfetti || typeof window === "undefined") return null;

  return <Confetti width={width} height={height} recycle={false} numberOfPieces={1800} colors={["#FFB6C1", "#FF69B4", "#FFD700", "#DB7093"]} />;
};

export default ConfettiComponent;