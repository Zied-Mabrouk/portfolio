import React, { useMemo } from "react";
import ExperienceGroup from "../components/ExperienceGroup";
import { ExperienceType, experiences as exp } from "../utils/experiences";

const Experience = () => {
  const [openExperience, setOpenExperience] = React.useState<number | null>(
    null
  );

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

  return (
    <div className="w-screen h-full flex flex-col text-white py-16 px-16">
      <h1 className="text-5xl mb-4">Experiences</h1>
      <div className="grid grid-cols-1 gap-4 max-h-[100vh] overflow-hidden">
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
