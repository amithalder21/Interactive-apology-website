import { useCallback, useEffect, useRef, useState } from "react";

const TARGET_VOLUME = 0.32;
const FADE_MS = 900;
const FADE_STEP_MS = 40;

// Browsers refuse audible autoplay until the page has been interacted with, so
// there is no way to truly force it. This tries immediately, and if it is
// blocked it starts on the very first tap, click or key press instead, which in
// practice means the first "Continue".
const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const mutedByUser = useRef(false);
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

  // Resolves true once the track is actually audible. Never sets state itself:
  // the play and pause listeners below own that, so the icon can never disagree
  // with what is coming out of the speakers.
  const start = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || mutedByUser.current) return false;

    try {
      audio.volume = 0;
      await audio.play();
      fadeTo(TARGET_VOLUME);
      return true;
    } catch {
      return false;
    }
  }, [fadeTo]);

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
    const events = ["pointerdown", "keydown", "touchstart"];

    const detach = () => events.forEach((e) => window.removeEventListener(e, onGesture));

    function onGesture() {
      start().then((ok) => {
        if (ok) detach();
      });
    }

    // Try straight away; fall back to the first interaction if that is refused.
    start().then((ok) => {
      if (!ok) events.forEach((e) => window.addEventListener(e, onGesture, { passive: true }));
    });

    return () => {
      clearInterval(fadeRef.current);
      detach();
    };
  }, [start]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      mutedByUser.current = true;
      fadeTo(0, () => audio.pause());
    } else {
      mutedByUser.current = false;
      start();
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/track.m4a" loop preload="auto" />

      <button
        type="button"
        onClick={toggle}
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
