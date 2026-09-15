"use client";

import { useEffect, useState } from "react";
import { textBalloons } from "balloons-js";

const VIM_LINES = [
  { text: "you escaped vim", color: "#a6e3a1", fontSize: 72 },
  { text: ":q! ... finally", color: "#b4befe", fontSize: 42 },
];

export default function Balloons() {
  const [escaped, setEscaped] = useState(false);

  useEffect(() => {
    let buffer = "";
    let coolingDown = false;

    const launchBalloons = () => {
      if (coolingDown) return;
      coolingDown = true;
      window.setTimeout(() => {
        coolingDown = false;
      }, 3000);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setEscaped(true);
        return;
      }

      const smallScreen = window.innerWidth < 640;
      textBalloons(
        VIM_LINES.map((line) => ({
          ...line,
          fontSize: smallScreen ? Math.round(line.fontSize * 0.55) : line.fontSize,
        }))
      );
      setEscaped(true);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      // Don't hijack typing inside form fields, which would fire while
      // a recruiter is writing you a message.
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
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

  return (
    <p aria-live="polite" className="sr-only">
      {escaped ? "You escaped vim. :q! ... finally." : ""}
    </p>
  );
}
