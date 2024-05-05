import { ExperienceType } from "../utils/experiences";

type Props = ExperienceType & {
  onClick: () => void;
};

const ExperienceCard = ({ onClick, title, company }: Props) => {
  return (
    <div
      className="bg-primary-light p-2 flex flex-col rounded-lg scale-100 transition-all hover:scale-105 bg-opacity-80 hover:bg-opacity-60"
      onClick={onClick}
    >
      <h1 className="text-secondary">{company}</h1>
      <h2 className="text-xs">{title}</h2>
    </div>
  );
};

export default ExperienceCard;
