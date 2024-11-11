import React from 'react';

type ExperienceType = {
  position: string;
  company: string;
  intervalDate: string;
  place: string;
  tasks: string[];
};

type Props = {
  experience: ExperienceType;
};

const Card = ({ experience }: Props) => {
  return (
    <div className="border-2 rounded-xl py-4 px-4">
      <div className="flex items-center justify-between">
        <span className="uppercase text-sm font-bold tracking-wider">
          {experience.position}
        </span>
        <span className="text-sm"> {experience.intervalDate}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="capitalize text-sm font-semibold">
          {experience.company}
        </span>
        <span className="text-sm text-gray-400"> {experience.place}</span>
      </div>
      <div className="pt-4 flex flex-col gap-1">
        {experience.tasks.map((task, index) => (
          <li className="text-base leading-snug" key={index}>
            {task}.
          </li>
        ))}
      </div>
    </div>
  );
};

export default Card;
