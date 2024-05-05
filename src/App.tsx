import React, { useCallback, useEffect, useMemo } from "react";
import Arrow from "./components/Arrow";
import NavBar from "./components/NavBar";
import Experience from "./modules/Experience";
import Home from "./modules/Home";

function App() {
  const [page, setPage] = React.useState<number>(0);
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);

  const screenWidth = useMemo(
    () => window?.innerWidth || 0,
    [window.innerWidth]
  );
  const limit = 2;

  const { prevPage, nextPage } = useMemo(() => {
    const prev = () => {
      setPage((prev) => (prev - 1 + limit) % limit);
    };
    const next = () => {
      setPage((prev) => (prev + 1) % limit);
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
  }, [containerRef, isScrolling, nextPage, prevPage]);

  return (
    <div className="bg-primary relative h-screen w-screen" ref={containerRef}>
      <NavBar setPage={setPage} />
      <Arrow className="left-0" label="prev" onClick={prevPage} />
      <div
        className="min-w-[300vw] h-full overflow-y-hidden max-w-fit flex overflow-x-auto"
        style={{
          transform: `translateX(-${screenWidth * page}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <Home />
        <Experience />
      </div>
      <Arrow className="right-0" label="next" onClick={nextPage} />
    </div>
  );
}

export default App;
