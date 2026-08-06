import { useCallback, useEffect, useRef, useState } from "react";

const TARGET_VOLUME = 0.32;
const FADE_MS = 900;
const FADE_STEP_MS = 40;

// Controlled by App. The choice is made on the opening screen, which is also
// the gesture browsers require before audio is allowed to play, so by the time
// `enabled` turns true the play call is permitted rather than refused.
const BackgroundMusic = ({ enabled, onToggle }) => {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const fadeTo = useCallback((target, onDone) => {
    const audio = audioRef.current;
    if (!audio) return;

    clearInterval(fadeRef.current);
    const step = ((target - audio.volume) * FADE_STEP_MS) / FADE_MS;

    fadeRef.current = setInterval(() => {
      const next = audio.volume + step;
      const done = step > 0 ? next >= target : next <= target;

      audio.volume = Math.min(1, Math.max(0, done ? target : next));

      if (done) {
        clearInterval(fadeRef.current);
        onDone?.();
      }
    }, FADE_STEP_MS);
  }, []);

  // Playing state comes from the element's own events, so the icon can never
  // disagree with what is actually coming out of the speakers.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (enabled) {
      audio.volume = 0;
      audio.play().then(
        () => fadeTo(TARGET_VOLUME),
        () => {} // refused; the pause listener keeps the icon honest
      );
    } else {
      fadeTo(0, () => audio.pause());
    }

    return () => clearInterval(fadeRef.current);
  }, [enabled, fadeTo]);

  return (
    <>
      <audio ref={audioRef} src="/track.m4a" loop preload="auto" />

      <button
        type="button"
        onClick={onToggle}
        aria-pressed={playing}
        aria-label={playing ? "Turn the music off" : "Turn the music on"}
        title={playing ? "Turn the music off" : "Turn the music on"}
        className="rounded-full p-2 text-cream/50 transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 9.5v5h3.2L12 18.5v-13L7.2 9.5H4z" strokeLinejoin="round" />
          {playing ? (
            <>
              <path d="M15.5 9.2a4 4 0 010 5.6" strokeLinecap="round" />
              <path d="M18 6.8a7.5 7.5 0 010 10.4" strokeLinecap="round" />
            </>
          ) : (
            <path d="M16 10l4 4m0-4l-4 4" strokeLinecap="round" />
          )}
        </svg>
      </button>
    </>
  );
};

export default BackgroundMusic;
