import React, { useEffect, useMemo } from "react";
import ExperienceGroup from "../components/ExperienceGroup";
import { ExperienceType, experiences as exp } from "../utils/experiences";

const Experience = ({ page }: { page: number }) => {
  const [openExperience, setOpenExperience] = React.useState<number | null>(
    null
  );

  useEffect(() => {
    if (page !== 1) {
      setOpenExperience(null);
    }
  }, [page]);

  const experiencesGroup = useMemo(() => {
    return exp.reduce((acc: ExperienceType[][], curr, index) => {
      if (index % 4 === 0) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);
  }, []);

  const experienceRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!experienceRef.current) return;

    const onScroll = (ev: WheelEvent) => {
      ev.stopPropagation();
    };

    experienceRef.current.addEventListener("wheel", onScroll);

    return () => experienceRef.current?.removeEventListener("wheel", onScroll);
  }, [experienceRef]);
  return (
    <div
      ref={experienceRef}
      onScroll={(e) => {
        console.log(e);
        e.preventDefault();
        e.stopPropagation();
      }}
      className="w-screen h-full flex flex-col text-white py-16 px-16 max-h-full overflow-y-auto"
    >
      <h1 className="text-5xl mb-4">Experiences</h1>
      <div
        onScroll={(e) => {
          console.log(e);
          e.preventDefault();
          e.stopPropagation();
        }}
        className="grid grid-cols-1 gap-4 max-h-[100vh]"
      >
        {experiencesGroup.map((group, key) => {
          return (
            <ExperienceGroup
              index={key}
              key={key}
              group={group}
              openExperience={openExperience}
              isOpen={
                openExperience !== null &&
                openExperience >= key * 4 &&
                openExperience < (key + 1) * 4
              }
              setOpenExperience={setOpenExperience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
