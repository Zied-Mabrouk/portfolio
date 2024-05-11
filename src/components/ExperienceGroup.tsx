import { useMemo } from "react";
import { ExperienceType } from "../utils/experiences";
import ExperienceCard from "./ExperienceCard";
import OpenExperience from "./OpenExperience";

type Props = {
  openExperience: number | null;
  setOpenExperience: React.Dispatch<React.SetStateAction<number | null>>;
  group: ExperienceType[];
  index: number;
  isOpen: boolean;
};

const ExperienceGroup = ({
  group,
  setOpenExperience,
  openExperience,
  index,
  isOpen,
}: Props) => {
  const className = useMemo(
    () =>
      `transition-all duration-[1s] overflow-hidden relative ${
        isOpen ? "h-[80vh]" : "h-24"
      } 
       `,
    [isOpen]
  );
  return (
    <div className={className}>
      <div className={`grid w-full grid-cols-4 gap-4 h-24 p-4`}>
        {group.map((experience, key) => (
          <ExperienceCard
            key={key}
            {...experience}
            onClick={() =>
              setOpenExperience((prev: number | null) =>
                prev === key + 4 * index ? null : key + 4 * index
              )
            }
          />
        ))}
      </div>

      {isOpen && openExperience !== null ? (
        <div className="px-4">
          {group.map((experience, key) => (
            <OpenExperience
              key={key}
              experience={experience}
              isOpen={key + 4 * index === openExperience}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceGroup;
