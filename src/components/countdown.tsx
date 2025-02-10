"use client";

import React, { useEffect, useState } from "react";

const TARGET_DATE = new Date("February 14, 2025 00:00:00").getTime();

interface CountdownTimerProps {
  onStormChange?: (isStorming: boolean) => void;
}

export default function CountdownTimer({ onStormChange }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance <= 0) {
        setTimeLeft("Happy Valentine's Day! ♥");
        onStormChange?.(false);
        clearInterval(interval);
        return;
      }

      if (distance < 1000 * 60 * 60 * 24) {
        onStormChange?.(true);
      } else {
        onStormChange?.(false);
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [onStormChange]);

  return (
    <div className="text-xl font-bold text-pink-600 font-karla">{timeLeft}</div>
  );
}
