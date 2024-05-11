import { useMemo } from "react";
import { ExperienceType } from "../utils/experiences";
import SimpleSlider from "./Slider/Slider";

type Props = {
  experience: ExperienceType;
  isOpen: boolean;
};

const OpenExperience = ({ experience, isOpen }: Props) => {
  const className = useMemo(
    () =>
      `transition-all duration-[1s] relative overflow-hidden slider ${
        isOpen ? "" : "hidden"
      }`,
    [isOpen]
  );
  return (
    <div className={className}>
      <SimpleSlider experience={experience} isOpen={isOpen} />
    </div>
  );
};

export default OpenExperience;
