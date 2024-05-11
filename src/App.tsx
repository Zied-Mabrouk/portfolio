import React, { useCallback, useEffect, useMemo } from "react";
import Arrow from "./components/Arrow";
import NavBar from "./components/NavBar";
import Experience from "./modules/Experience";
import Home from "./modules/Home";

function App() {
  const [page, setPage] = React.useState<number>(0);
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);

  const screenWidth = useMemo(() => window?.innerWidth || 0, []);
  const limit = 2;

  const { prevPage, nextPage } = useMemo(() => {
    const prev = () => {
      setPage((prev) => {
        if (prev === 0) return prev;
        return prev - 1;
      });
    };
    const next = () => {
      setPage((prev) => {
        if (prev === limit - 1) return prev;
        return prev + 1;
      });
    };

    return {
      prevPage: prev,
      nextPage: next,
    };
  }, [setPage, limit]);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    (next: boolean) => {
      if (isScrolling) return;
      setIsScrolling(() => true);
      if (next) nextPage();
      else prevPage();
      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    },
    [nextPage, prevPage, isScrolling]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const onScroll = (ev: WheelEvent) => {
      handleScroll(ev.deltaY > 0);
    };

    containerRef.current.addEventListener("wheel", onScroll);

    return () => containerRef.current?.removeEventListener("wheel", onScroll);
  }, [containerRef, isScrolling, nextPage, prevPage, handleScroll]);

  return (
    <div
      className="bg-primary relative h-screen w-screen overflow-y-hidden max-h-[100vh]"
      ref={containerRef}
    >
      <NavBar setPage={setPage} />

      <div
        className="min-w-[300vw] h-full overflow-y-hidden max-w-fit flex overflow-x-auto"
        style={{
          transform: `translateX(-${screenWidth * 0.9 * page}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <Home />
        <Experience page={page} />
      </div>

      {page !== 0 && (
        <Arrow className="left-0" label="prev" onClick={prevPage} />
      )}
      {page !== limit - 1 && (
        <Arrow className="right-0" label="next" onClick={nextPage} />
      )}
    </div>
  );
}

export default App;
