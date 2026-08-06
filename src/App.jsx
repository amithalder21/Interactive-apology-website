import { useCallback, useEffect, useState } from "react";
import { story } from "./data/story";
import Navbar from "./components/Navbar";
import FloatingElements from "./components/FloatingElements";
import Chapter from "./components/Chapter";
import ProgressDots from "./components/ProgressDots";
import Question from "./components/Question";
import FinalScreen from "./components/FinalScreen";
import StartGate from "./components/StartGate";

const PHASES = { STORY: "story", QUESTION: "question", FINAL: "final" };

function App() {
  const [phase, setPhase] = useState(PHASES.STORY);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  // The opening tap is what lets the browser play audio, so the track starts here.
  const begin = useCallback(() => {
    setMusicOn(true);
    setStarted(true);
  }, []);

  const next = useCallback(() => {
    setCurrent((i) => {
      if (i === story.length - 1) {
        setPhase(PHASES.QUESTION);
        return i;
      }
      return i + 1;
    });
  }, []);

  const back = useCallback(() => setCurrent((i) => Math.max(0, i - 1)), []);

  // Arrow keys page through the chapters, once she is past the opening screen.
  useEffect(() => {
    if (phase !== PHASES.STORY || !started) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") back();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, started, next, back]);

  return (
    // overflow-x only: clipping the y-axis would hide the controls on short screens
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden bg-night text-cream">
      {/* warm Delhi-evening wash */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-plum opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[32rem] w-[32rem] rounded-full bg-rose opacity-20 blur-3xl" />

      <FloatingElements />

      <Navbar musicOn={musicOn} onToggleMusic={() => setMusicOn((on) => !on)} />

      {!started && <StartGate onBegin={begin} />}

      <main className="relative z-10 flex flex-1 items-center justify-center px-5 py-8 sm:px-8">
        {phase === PHASES.STORY && (
          <Chapter
            key={story[current].slug}
            memory={story[current]}
            index={current}
            total={story.length}
            onNext={next}
            onBack={back}
            isLast={current === story.length - 1}
          />
        )}

        {phase === PHASES.QUESTION && <Question onNotAngry={() => setPhase(PHASES.FINAL)} />}

        {phase === PHASES.FINAL && <FinalScreen />}
      </main>

      <footer className="relative z-10 px-5 pb-8 pt-2">
        {phase === PHASES.STORY && (
          <ProgressDots total={story.length} current={current} onJump={setCurrent} />
        )}
      </footer>
    </div>
  );
}

export default App;
