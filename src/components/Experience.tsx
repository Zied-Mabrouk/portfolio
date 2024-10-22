import React, { useMemo } from 'react';
import Card from './Card';
import data from '../../data';

const Experience = () => {
  const { experiences } = useMemo(() => data.experience, []);
  return (
    <div id="experience" className="py-8">
      <div className="flex items-center gap-8 pb-4">
        <div className="text-accent2 text-3xl">02.</div>
        <h2 className="text-3xl font-medium tracking-wider">Experience</h2>
      </div>

      <div className="w-full grid grid-cols-3 justify-center items-center gap-8">
        {experiences.map((experience, index) => (
          <Card key={index} experience={experience} accent={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
