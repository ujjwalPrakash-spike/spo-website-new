// Video background component playing 60fps video with fallback poster and subtle vignette.

import { HERO_CONFIG } from "@/lib/constants";

export function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={HERO_CONFIG.posterUrl}
        className="w-full h-full object-cover object-center"
      >
        <source src={HERO_CONFIG.videoUrl} type="video/mp4" />
      </video>

      {/* Subtle Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
    </div>
  );
}
