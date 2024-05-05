import { ExperienceType } from "../utils/experiences";

type Props = {
  experience: ExperienceType;
};

const OpenExperience = ({ experience }: Props) => {
  return <div>{experience.title}</div>;
};

export default OpenExperience;
