"use client";

import { useEffect, useState } from "react";
import StrokeText from "@/components/ui/StrokeText";

export function BeyondSpeedTitle() {
  const [fontSize, setFontSize] = useState(800);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setFontSize(Math.max(22, Math.floor(w * 0.06)));
      } else if (w < 768) {
        setFontSize(Math.max(34, Math.floor(w * 0.055)));
      } else if (w < 1024) {
        setFontSize(Math.max(48, Math.floor(w * 0.05)));
      } else {
        setFontSize(800);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full flex justify-center items-center select-none pointer-events-none px-3 sm:px-6">
      <StrokeText
        text="SPO IITK"
        italicStartIndex={26}
        strokeColor="rgba(255,255,255,0.75)"
        fillColor="#f8f9fa"
        strokeWidth={fontSize > 45 ? 1.8 : 1.2}
        drawDuration={1.4}
        fillDelay={0.15}
        stagger={0.03}
        ease="power3.out"
        trigger="mount"
        fillMode="wipe"
        fontSize={fontSize}
        fontWeight={700}
        letterSpacing={fontSize > 45 ? -1 : -0.5}
        className="font-['Clash_Grotesk',sans-serif] drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
      />
    </div>
  );
}

export default BeyondSpeedTitle;
