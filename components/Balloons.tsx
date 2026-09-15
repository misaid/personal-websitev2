"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

const BALLOON_COLORS = [
  "#a6e3a1",
  "#89b4fa",
  "#b4befe",
  "#f9e2af",
  "#f38ba8",
  "#f5c2e7",
  "#94e2d5",
  "#fab387",
];

export default function Balloons() {
  useEffect(() => {
    let buffer = "";

    const launchBalloons = () => {
      const shapes: confetti.Shape[] = [
        confetti.shapeFromText({ text: "🎈", scalar: 2 }),
      ];

      const fire = (x: number) =>
        confetti({
          particleCount: 40,
          angle: 90,
          spread: 55,
          startVelocity: 45,
          gravity: 0.4,
          drift: 0,
          decay: 0.93,
          ticks: 300,
          origin: { x, y: 0.9 },
          colors: BALLOON_COLORS,
          shapes,
          scalar: 2.2,
          zIndex: 9999,
          disableForReducedMotion: true,
        });

      fire(0.1);
      fire(0.3);
      fire(0.5);
      fire(0.7);
      fire(0.9);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!event.key || event.key.length !== 1) return;
      buffer = (buffer + event.key).slice(-3);
      if (buffer === ":q!") {
        buffer = "";
        launchBalloons();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}