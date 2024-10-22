import React, { useMemo } from 'react';
import Table from './Table';
import Image from 'next/image';
import data from '../../data';

const About = () => {
  const descriptions = useMemo(() => data.about.description.split('##'), []);
  return (
    <div className="flex w-full gap-8" id="about">
      <div className="text-accent1 text-3xl">01.</div>
      <div className="flex w-full">
        <div className="flex w-2/3 flex-col gap-4 mr-8">
          <h2 className="text-3xl font-medium tracking-wider">About Me</h2>
          {descriptions.map((description, index) => (
            <p key={index} className="text-base text-gray-400 text-justify">
              {description}
            </p>
          ))}
        </div>
        <div className="flex w-1/3 mx-12 justify-center items-center">
          <Table className="w-full">
            <div className="relative aspect-square">
              <Image
                src="/me.jpg"
                alt=""
                layout="fill"
                className="object-cover"
              />
            </div>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default About;
