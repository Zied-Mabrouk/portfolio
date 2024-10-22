import React, { useMemo } from 'react';
import { ExperienceType } from '../../types/experience';
import Image from 'next/image';

type Props = {
  experience: ExperienceType;
  accent: number;
};

const Card = ({ experience, accent: comingAccent }: Props) => {
  const accent = useMemo(
    () => `text-accent${(comingAccent % 4) + 1}`,
    [comingAccent],
  );

  return (
    <div className="relative flex flex-col justify-between h-56 pt-4 pb-2 overflow-hidden rounded-lg text-black px-4 group">
      <div className="blur-[100px] bg-gray-200 bg-opacity-80 absolute w-full h-full top-0 left-0 -z-10 group-hover:z-10 group-hover:blur-sm">
        <Image
          src={experience.image}
          alt=""
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="bg-white bg-opacity-5 absolute w-full h-full top-0 left-0 z-0"></div>
      <div>
        <div className="w-full pb-2 flex flex-col group-hover:z-0">
          <div className="flex items-center justify-between">
            <span className="capitalize font-semibold text-lg whitespace-nowrap leading-none">
              {experience.title}
            </span>
            <span className="whitespace-nowrap text-end">
              {experience.sDate} - {experience.eDate}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg leading-none text-gray-900">
              <span className={`${accent} text-2xl`}>
                {experience.company.charAt(0).toUpperCase()}
              </span>
              {experience.company.slice(1)}
            </span>
            <span className="whitespace-nowrap text-end text-sm">
              {experience.place}
            </span>
          </div>
        </div>
        <ul className="pl-4 pb-4 text-gray-950">
          {experience.tasks.map((task, index) => (
            <li key={index} className="list-disc py-1 text-justify">
              {task}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={experience.link}
        target="_blank"
        className="ml-auto flex justify-end underline underline-offset-2 font-semibold text-sm text-gray-900 group-hover:z-20 relative"
      >
        Check it Out {'>'}
      </a>
    </div>
  );
};

export default Card;
