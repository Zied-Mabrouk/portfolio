import React from 'react';
import Card from '../cores/Card';
import ExperienceData from '../../lib/data';

const Experience = () => {
  return (
    <div className="flex w-full items-center pt-24 pb-4 flex-col mx-auto px-[10vw] gap-8">
      <h1 className="linear-gradient text-4xl font-bold max-w-96 leading-relaxed text-center">
        Experiences that made me who I am today
      </h1>
      <div className="w-full flex justify-center relative items-center">
        <span className="absolute top-[-22px] rotate-[-10deg] bg-white rounded-full p-3 text-sm">
          Experiences
        </span>
        <hr className="w-full" />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between w-full gap-8 py-8">
        {ExperienceData.map((exp, index) => (
          <Card key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
