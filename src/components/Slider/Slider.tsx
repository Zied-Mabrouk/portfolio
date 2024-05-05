import { useMemo } from "react";
import { ExperienceType } from "../../utils/experiences";
import VideoSlider from "./VideoSlider";

type Props = {
  experience: ExperienceType;
};

const SimpleSlider = ({ experience }: Props) => {
  const isPhoto = useMemo(() => !!experience.photos, [experience.photos]);

  return isPhoto ? (
    <VideoSlider videos={experience.videos as string[]} />
  ) : (
    <VideoSlider videos={experience.videos as string[]} />
  );
};

export default SimpleSlider;
