import { useMemo } from "react";
import { ExperienceType } from "../../utils/experiences";
import VideoSlider from "./VideoSlider";

type Props = {
  experience: ExperienceType;
  isOpen: boolean;
};

const SimpleSlider = ({ experience, isOpen }: Props) => {
  const isPhoto = useMemo(() => !!experience.photos, [experience.photos]);

  return isPhoto ? (
    <VideoSlider isOpen={isOpen} videos={experience.videos as string[]} />
  ) : (
    <VideoSlider isOpen={isOpen} videos={experience.videos as string[]} />
  );
};

export default SimpleSlider;
